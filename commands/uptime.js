const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor(0x1A7939)
  .addField('Uptime', `${client.ping / 1000} seconds`)
  message.channel.send({ embed });
  
}
