exports.run = async(client, message, args) => {

    let botembed = new Discord.RichEmbed()
    .setauthor(`${bot.user.username} ~ About`, bot.user.displayAvatarURL)
    .setDescription(`Hello! I'm **${bot.user.username}**. \nI am owned by **Jackohhh** using the [discord.js library](https://github.com/discordjs/discord.js/)(11.3.2). \nType `!!help\` to see my commands! \n\n`)
    .setColor('#1A7939')
    .addField('Stats', '${client.guilds.size} servers \n${client.users.size} users \n${client.channels.size} channels', true)
    .addField('Created On', bot.user.createdAt)
    .footer('Last Restart | ');
    
    return message.channel.send(botembed);

}
