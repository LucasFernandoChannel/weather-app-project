import fetch from 'node-fetch';

const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
const chatId = 'YOUR_TELEGRAM_CHAT_ID';

async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const params = {
    chat_id: chatId,
    text: message,
  };

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    console.log('Telegram message sent successfully.');
  } catch (error) {
    console.error('Error sending Telegram message:', error.message);
  }
}

sendTelegramMessage('Weather web app has been deployed!');
