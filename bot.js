const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const cron = require('node-cron');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
  console.log(`✅ IndoPlay Bot aktif sebagai ${client.user.tag}`);

  // Setiap hari jam 17:55 WIB (GMT+7 = 10:55 UTC)
  cron.schedule('55 10 * * *', async () => {
    const channel = await client.channels.fetch(process.env.CHANNEL_ID);
    if (channel) {
      channel.send(`⚠️ **PENGUMUMAN OOC** ⚠️

🌩️ *KOTA AKAN MENGALAMI BADAI PADA PUKUL 18:00 WIB*
💬 Warga harap mencari tempat berlindung dan tidak keluar rumah.

Matahari tenggelam ditutup awan,  
Waktunya rebahan jangan kelayapan.  
Badai datang jangan di lawan,  
Besok ngonten lagi kita hantam kota pelan-pelan 😎`);
    }
  }, {
    timezone: "Asia/Jakarta"
  });
});

client.login(process.env.TOKEN);
