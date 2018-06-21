exports.run = async(client, message, args) => {
	
	if(!message.member.hasPermission("MANAGAE_MESSAGES")) return message.reply("it doesn't look like you can ue that.");
	const sayMessage = args.join(' ');
	message.delete().catch(O_o=>{});
	message.channel.send(`<:msg:412878967062790144> ${sayMessage}`);
	
}
