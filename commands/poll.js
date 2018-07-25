const Discord = require('discord.js');

exports.run = async(client, message, args, tools) => {

  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`${message.author.username}, it doesn't look like you can use that.`);
  
  if (!args[0]) return message.channel.send('**Usage**: !!poll <question>');
  
  const embed = new Discord.MessageEmbed()
  .setcolor()
  .setFooter(`From ${message.author.username}#${message.author.discriminator}`)
  .setDescription(`**${args.join(' ')}**`)
  .setTitle('Poll ');
  
  let msg = await message.channel.send(embed);
  
  await msg.react('👍');
  await msg.react('👎');
  await msg.react('🤷');
  
  message.delete({timeout: 1000})

}
