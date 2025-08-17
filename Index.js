// 🌐 ICU 1.0 Bot - Main Entry
// Author: Caleb Irunna
// Phone: +2347079799769

const { Client, LocalAuth } = require('whatsapp-web.js');

// 📂 Load configuration
require('dotenv').config();
const config = require('./config');

// 🛠 Initialize client with pairing code only
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true },
    webVersionCache: { type: 'remote' }
});

// 🔑 Pairing code authentication
client.on('ready', () => {
    console.log('🔥 ICU 1.0 Bot is now online and ready!');
    console.log('📌 Logged in using Pairing Code method only');
});

// 💬 Message handler
client.on('message', async (msg) => {
    if (!msg.body.startsWith(config.prefix)) return;
    const args = msg.body.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        // 📂 Load command from commands folder
        const cmd = require(`./commands/${command}.js`);
        await cmd.run(client, msg, args);
    } catch (err) {
        msg.reply('❌ Unknown command. Try `.menu`');
    }
});

// 🚀 Start client
client.initialize();
