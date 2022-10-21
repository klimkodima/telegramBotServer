const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_API_TOKEN } = require('./util/config');

const bot = new TelegramBot(TELEGRAM_API_TOKEN, {polling: true}); 
const webAppUrl = 'https://yandex.by/'

bot.on('message', async(msg) => {
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    await bot.sendMessage(chatId, 'Заполни форму', {
        reply_markup: JSON.stringify({
            keyboard: [
              [{ text: 'Заполнить форму', web_app: { url: webAppUrl } }]
            ],
            one_time_keyboard: false
          })
    });

  /*  await bot.sendMessage(chatId, 'Сделай заказ', {
        reply_markup: JSON.stringify({
            inline_keyboard: ([
              [{ text: 'Сделать заказ', web_app: { url: webAppUrl }}]
            ]
    )})
    });*/
  });