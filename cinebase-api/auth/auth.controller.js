import authService from "./auth.service.js";

function loginWithGoogle(req, res) {
    const url = authService.getGoogleAuthURL();
    return res.send(url);
}

async function googleCallback(req, res) {
    const { code, state } = req.query;
    try {
        const { data, nuevoToken, tokenAcceso } = await authService.handleGoogleCallback(code);
        res.cookie('csrf_token', nuevoToken, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000
        });

        res.cookie('access_token', tokenAcceso, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000 // 15 minutos
        });

        // console.log("Token recibido: " + nuevoToken)
        // res.send(JSON.stringify(data));
        // Aquí normalmente rediriges a tu frontend con el JWT:
        return res.redirect(`http://localhost:5173/dashboard?login=success`);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al autenticar con Google" });
    }
}

function getCurrentUser(req, res) {
    const user = req.user;
    return res.json(user);
}

export default {
    loginWithGoogle,
    googleCallback,
    getCurrentUser
}