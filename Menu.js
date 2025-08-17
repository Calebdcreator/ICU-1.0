// 📂 commands/menu.js
const config = require("../config");

module.exports.run = async (client, msg, args) => {
    const menuText = `
👋 Hello *${msg._data.notifyName || "User"}*  
Welcome to *${config.botName}* 🚀

📌 Available Menus:
━━━━━━━━━━━━━━━━━━
👥 Group Menu  →  \`.groupmenu\`
🛠 Tools Menu  →  \`.toolsmenu\`
🎬 Anime Menu  →  \`.animemenu\`
📚 Education Menu  →  \`.educationmenu\`
😂 Fun Menu  →  \`.funmenu\`
🔞 18+ Menu  →  \`.adultmenu\`
🎶 Media Menu  →  \`.mediamenu\`
👑 Owner Menu  →  \`.ownermenu\`
━━━━━━━━━━━━━━━━━━
⚡ Prefix: \`${config.prefix}\`

_${config.footer}_
    `;

    await msg.reply(menuText);
};
