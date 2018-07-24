exports.run = async(client, message, args) => {
   
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author.username}, it doesn't look like you can use that. :sweat_smile:`);
   if(!args[0]) return message.channel.send(`Please specify the number of messages to clear, ${message.author.username}.`);
      message.delete()
	  message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`I have deleted \`${args[0]} messages\` for you! :slight_smile:`).then(msg => msg.delete(5000));
   });
}
