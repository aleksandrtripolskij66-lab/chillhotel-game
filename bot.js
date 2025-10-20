const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, {polling: true});

const GAME_URL = 'https://chillhotel-game.aleksandrtripol.repl.co';

// Простой веб-сервер
app.get('/', (req, res) => {
  res.send('🏨 ChillHotel Bot is running!');
});

app.listen(3000, () => {
  console.log('🚀 Web server started on port 3000');
});

console.log('🤖 Бот запущен на Replit!');

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

// Добавляем команду /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `🎮 *Правила игры ChillHotel:*

🏨 Ты управляешь отелем! 
• Принимай гостей
• Улучшай номера
• Зарабатывай деньги

📱 *Как играть:*
1. Нажми "🎮 Играть"
2. Откроется игровое окно
3. Управляй отелем через интерфейс

⚡ *Основные функции:*
• Заселение гостей
• Уборка номеров
• Покупка улучшений
• Повышение уровня отеля

Если игра не открывается, попробуй:
• Обновить страницу
• Проверить интернет
• Перезапустить бота (/start)`, {parse_mode: 'Markdown'});
});

// Добавляем команду /rules
bot.onText(/\/rules/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `📖 *Правила ChillHotel:*

🎯 *Цель игры:*
Стать владельцем лучшего отеля в городе!

📊 *Механика:*
• Каждый гость приносит доход
• Чем лучше номер - тем больше платят
• Улучшай отель для большего дохода

⭐ *Уровни отеля:*
1️⃣ Стартовый (5 номеров)
2️⃣ Бизнес-класс (10 номеров) 
3️⃣ Люкс-отель (20 номеров)
4️⃣ Пятизвездочный (50 номеров)

💡 *Советы:*
• Не забывай убирать номера
• Улучшай постепенно
• Привлекай VIP-гостей`, {parse_mode: 'Markdown'});
});
