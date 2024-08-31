import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import { TELEGRAM_TOKEN, PORT } from './config.js';


const app = express();
const token = TELEGRAM_TOKEN; 
const bot = new TelegramBot(token, { polling: true });

app.use(express.json());


bot.onText(/\/start/, (msg) => {
    const syntaxMessage = `
    Привет! Добро пожаловать. Teroky_Ai бот, который создает из текстового запроса уникальное изображение!

    Хотите начать?

    Просто напишите объект, который вы хотели бы увидеть, а затем опишите его внешность, стиль и любые дополнительные детали, которые приходят вам в голову.
    `;
});




app.listen(PORT, (err) => {
    if (err) {
        return console.log('Server error 👀', '\n', err);
    }
    console.log('Server OK❤️');
});
