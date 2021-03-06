const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity(`The New Defenders | !!help`, { type: 'WATCHING' });
});

// Constant Variables 
const prefix = '!!';
const ownerID = '183527322236878850';

client.on('message', async message => {
	
	// Variables
	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	
	// Return Statements
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	// Command Handler
	try {
		
		// Auto-Reload
		delete require.cache[require.resolve(`./commands/${cmd}.js`)];
		
		// Options
		let ops = {
		    ownerID: ownerID
		}
		
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args, ops);
		
	} catch (e) {
		console.log(e.stack);
	}
	
//client.on('guildMemberAdd', member => {
  //member.guild.channels.find('name', 'general').send(`Welcome to **${guild.name}**, ${member.user.username}! We now have ${guild.memberCount} members.`);
//});
	
});

client.login(process.env.TOKEN);
