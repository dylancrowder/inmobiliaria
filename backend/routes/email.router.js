import { Router } from "express";
import EmailService from "../db/services/email.service.js";

const router = Router();
const emailService = new EmailService();
let mensajeEnviado = false;

router.post('/send-email', async (req, res) => {
    if (mensajeEnviado) {
        return res.status(400).json({ error: 'El mensaje ya ha sido enviado.' });
    }

    const { from, subject, html, } = req.body;

    try {
        await emailService.sendEmail(from, subject, html, );
        mensajeEnviado = true;
        res.status(200).json({ message: 'Correo electrónico enviado correctamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al enviar el correo electrónico.' });
    }
});

export default router;
