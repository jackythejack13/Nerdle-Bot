exports.run = async(client, message, args) => {
	
	if(!message.member.hasPermission("MANAGAE_MESSAGES")) return message.reply("it doesn't look like you can use that.");
	let sayMessage = args.join(' ');
	message.delete().catch();
	message.channel.send(`<:msg:412878967062790144> ${sayMessage}`);
	
}
