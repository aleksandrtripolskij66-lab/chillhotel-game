const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, {polling: true});

const GAME_URL = 'https://chillhotel-game.onrender.com';

// Простой веб-сервер
app.get('/', (req, res) => {
  res.send('🏨 ChillHotel Bot is running!');
});

app.listen(3000, () => {
  console.log('🚀 Web server started on port 3000');
});

console.log('🤖 Бот запущен на Render 24/7!');

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🏨 Добро пожаловать в ChillHotel!', {
    reply_markup: {
      inline_keyboard: [
        [{text: "🎮 Играть", web_app: {url: GAME_URL}}]
      ]
    }
  });
});
