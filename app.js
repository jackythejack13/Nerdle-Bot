// Require Packages
const Discord = require('discord.js');
const client = new Discord.Client();

// Constant Variables
const prefix = '/';
const ownerID = '183527322236878850';

client.on('message', message => {

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

		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args);

	} catch (e) {
		console.log(e.stack);
	}
});

client.on('ready', () => console.log('Launched!'));


client.login('');
