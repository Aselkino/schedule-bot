const { Telegraf } = require('telegraf');

const token = '1602796699:AAEIdUHolDTEIKYb5uxiyqXtuN8W4Xgc_VU';

const bot = new Telegraf(token);
exports.bot = bot;

exports.runBot = async function() {
    console.log('Запускаю бота...');
    try { 
        
        await bot.launch();

        console.log('Бот успешно запущен');
    } catch (error) {
        console.log('Ошибка: ', error);
    }
}
