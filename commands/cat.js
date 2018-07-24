const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async(client, message, args) => {
	
	const { body } = await superagent
	.get('https://aws.random.cat/meow');
	const embed = new Discord.RichEmbed()
	.setColor(0x954D23)
	.setTitle("Meow :cat:")
	.setImage(body.file)
	message.channel.send(embed)
	
}
