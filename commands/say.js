exports.run = async(client, message, args) => {
	
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("it doesn't look like you can use that.");
	const sayMessage = args.join(' ');
	message.delete().catch();
	message.channel.send(`<:msg:412878967062790144> ${sayMessage}`);
}
