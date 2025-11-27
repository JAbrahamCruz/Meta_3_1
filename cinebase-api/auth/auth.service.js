import jwt from "jsonwebtoken";
import { config } from "dotenv"
import { google } from "googleapis"
import crypto from "crypto"

import db from '../models/index.js'

config()

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

function generarTokenCSRF() {
    return crypto.randomBytes(32).toString('hex');
}

function getGoogleAuthURL() {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ],
    });
    return authUrl;
}

async function handleGoogleCallback(code) {
    // Intercambiar el code por un token de google
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Obtener información del usuario de Google
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const { data } = await oauth2.userinfo.get();

    const newUser = {
        googleID: data.id,
        name: data.name,
        email: data.email,
        picture: data.picture,
        role: 'user',
        active: true
    }

    const user = await db.User.findOne({
        where: {
            googleID: data.id
        }
    });

    if (!user) {
        console.log("Creando usuario...");
        const user = await db.User.create(newUser);
        console.log("Usuario creado: ", user.toJSON());
    }

    const nuevoToken = generarTokenCSRF();

    const tokenAcceso = jwt.sign(
        {
            userId: data.id,
            email: data.email,
            csrfToken: nuevoToken // Incluir CSRF en el JWT para verificación
        },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );

    return { data, nuevoToken, tokenAcceso };
}

function verificarTokenCSRF(tokenCSRF, tokenSesion) {
    try {
        const payload = jwt.verify(tokenSesion, process.env.JWT_SECRET);
        return payload.csrfToken === tokenCSRF;
    } catch (error) {
        return false;
    }
}

export default {
    getGoogleAuthURL,
    handleGoogleCallback,
    verificarTokenCSRF
}