// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elton.mayer68@ethereal.email',
        pass: 'PdhF9tDs8cxXeMRbqb'
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, messageType, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'elton.mayer68@ethereal.email',
        subject: `Názov: ${messageType}`,
        text: `Celé Meno: ${name}\nEmail: ${email}\nTyp Služby: ${messageType}\n\nSpráva:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
