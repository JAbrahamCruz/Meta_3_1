import jwt from "jsonwebtoken";
import authService from "./auth.service.js";
import db from '../models/index.js';

async function verificarAutenticacion(req, res, next) {
    const tokenSesion = req.cookies?.access_token;
    const tokenCSRF = req.headers["x-csrf-token"];

    if (!tokenSesion || !tokenCSRF) {
        return res.status(401).json({ message: "No autenticado" });
    }

    // 1. Verificar CSRF
    if (!authService.verificarTokenCSRF(tokenCSRF, tokenSesion)) {
        return res.status(403).json({ message: "CSRF inválido" });
    }

    try {
        // 2. Decodificar JWT
        const payload = jwt.verify(tokenSesion, process.env.JWT_SECRET);

        // 3. Buscar usuario en BD
        const user = await db.User.findOne({
            where: { googleID: payload.userId }
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // 4. Injectar user al request
        req.user = user;

        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
}

export default {
    verificarAutenticacion
}