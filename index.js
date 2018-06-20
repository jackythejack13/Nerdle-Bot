const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", async () => {
  console.log(`$client.user.username} is online!`);
  client.user.setActivity(`The New Defenders | !!help`, { type: 'WATCHING' });
});

client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
});

client.login(process.env.TOKEN);
