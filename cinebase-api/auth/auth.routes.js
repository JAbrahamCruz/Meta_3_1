import express from "express";
import authController from "./auth.controller.js";
import authMiddleware from "./auth.middleware.js";

const router = express.Router();

router.get("/login", authController.loginWithGoogle);
router.get("/callback", authController.googleCallback);
router.get("/me", authMiddleware.verificarAutenticacion, authController.getCurrentUser);

export default router;