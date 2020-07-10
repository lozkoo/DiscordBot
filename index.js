const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "lc "
client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.startsWith(prefix)) {
    if(msg.content == '${prefix} komenda)' {
        msg.channel.send("otrzymalem polecenie");
    }
}
});

client.login('NzI5NDQ0ODg5MzIyMDYxOTE1.Xwhltw._Dy3p1nOBF-04gc_ZTUAoplq75M');