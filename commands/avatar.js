const Discord = require('discord.js');

exports.run = async(client, message, args) => {
	
    if (args.join(" ") == "") {
        message.reply("you need to mention a user for this command! \n**Useage:** `!!avatar @USER`");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("#000000") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
        message.channel.send(embed); // Send embed
    }
	
}
