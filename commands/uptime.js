const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
	
	const embed = new Discord.RichEmbed()
	.setColor('#1A7939')
	.addField('Uptime', + (Math.round(client.uptime / (1000 * 60 * 60))) + " hr, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " min, " + (Math.round(client.uptime / 1000) % 60) + " sec")
	.setFooter("Last started on " + client.readyAt) 
	
	message.channel.send(embed)
	
}
