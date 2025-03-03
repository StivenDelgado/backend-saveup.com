// utils/emailUtils.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "stiven03dg@gmail.com",
        pass: process.env.NODEMAILER_KEY,
    },
});

export async function sendEmail(destinatario, asunto, contenido, url) {
    try {
        const info = await transporter.sendMail({
            from: '"Stiven Delgado" <stiven03dg@gmail.com>',
            to: destinatario,
            subject: asunto,
            text: contenido,
            html: html(url),
        });
        console.log(`Correo enviado a ${destinatario}: ${info.messageId}`);
        return info.messageId;
    } catch (error) {
        console.error(`Error al enviar correo a ${destinatario}:`, error.message);
        throw error; // Relanzar el error para que el llamador lo maneje
    }
}

const html = (url) => {
    return  `
    <!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Recuperación de Contraseña - SaveUp</title>
<style>
/* Estilos generales */
body {
font-family: Arial, sans-serif;
background-color: #f4f4f4;
margin: 0;
padding: 0;
line-height: 1.6;
}

/* Contenedor principal del correo */
.email-container {
max-width: 600px;
margin: 0 auto;
background-color: #ffffff;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Encabezado */
.header {
background-color: #007bff;
color: #ffffff;
text-align: center;
padding: 20px;
}

.header h1 {
margin: 0;
font-size: 24px;
font-weight: bold;
}

/* Contenido principal */
.content {
padding: 20px;
color: #333333;
}

.content h2 {
font-size: 20px;
margin-bottom: 16px;
color: #007bff;
}

.content p {
font-size: 16px;
margin-bottom: 16px;
}
.content a{
    color: #ffffff;
}
/* Botón de acción */
.button {
display: inline-block;
text-decoration: none;
background-color: #007bff;
color: #ffffff;
padding: 12px 24px;
text-decoration: none;
border-radius: 4px;
font-size: 16px;
margin-top: 16px;
margin-bottom: 16px;
}

.button:hover {
background-color: #0056b3;
}


/* Pie de página */
.footer {
text-align: center;
padding: 20px;
background-color: #f4f4f4;
color: #777777;
font-size: 14px;
}

.footer a {
color: #007bff;
text-decoration: none;
}

.footer a:hover {
text-decoration: underline;
}

/* Estilos responsivos */
@media only screen and (max-width: 600px) {
.email-container {
border-radius: 0;
}

.header h1 {
font-size: 20px;
}

.content h2 {
font-size: 18px;
}

.content p {
font-size: 14px;
}

.button {
font-size: 14px;
padding: 10px 20px;
}
}
</style>
</head>
<body>
<div class="email-container">
<div class="header">
<h1>SaveUp</h1>
</div>
<div class="content">
<h2>Recuperación de Contraseña</h2>
<p>Hola,</p>
<p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en <strong>SaveUp</strong>. Si no realizaste esta solicitud, puedes ignorar este correo.</p>
<p>Para restablecer tu contraseña, haz clic en el siguiente botón:</p>
<a href=${url} class="button">Restablecer Contraseña</a>
<p>Gracias por confiar en <strong>SaveUp</strong>.</p>
</div>
<div class="footer">
<p>Este correo fue enviado por <a href="https://saveup.com">SaveUp</a>. Si tienes alguna pregunta, no dudes en contactarnos.</p>
<p>&copy; 2025 SaveUp. Todos los derechos reservados.</p>
</div>
</div>
</body>
</html>
    `

}