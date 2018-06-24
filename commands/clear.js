exports.run = async(client, message, args) => {
   
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`it doesn't look like you can use that.`);
   message.delete();
   if(!args[0]) return message.channel.send("oof");
   message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`I have deleted **${args[0]}** messages!`).then(msg => msg.delete(5000));
   });
}
