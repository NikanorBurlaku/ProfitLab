const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const app = express();
const port = 3000; // Порт вашего сервера

app.use(cors()); // Включение CORS middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Создайте экземпляр транспорта для отправки почты (вам нужно будет указать свои данные)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'nicanorburlacu@gmail.com',
        pass: 'raiyuxfzriefqrsg'
    }
});

app.use(express.json());

app.post('/submitForm', (req, res) => {
    const formData = req.body;
    console.log(formData);

    // Настройте письмо
    const mailOptions = {
        from: 'mail@gmail.com',
        to: 'nicanorburlacu@gmail.com', // Электронный адрес получателя
        subject: 'Новая форма от ' + formData.name,
        text: `
      Имя: ${formData.name}
      Email: ${formData.email}
      Мессенджер: ${formData.messenger}
      Никнейм мессенджера: ${formData.messengerUsername}
      Идея проекта: ${formData.idea}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send(JSON.stringify('Ошибка отправки письма'));
        } else {
            console.log('Письмо отправлено: ' + info.response);
            res.status(200).send(JSON.stringify('Письмо успешно отправлено'));
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
