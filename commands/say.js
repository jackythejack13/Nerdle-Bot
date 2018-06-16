exports.run = (client, message, args) => {
	
	const sayMessage = args.join(' ');
	message.delete().catch(O_o=>{});
	message.channel.send(`<:msg:412878967062790144> ${sayMessage}`);
	
}