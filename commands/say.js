exports.run = async(client, message, args) => {
	
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:tickno:41287883179631796355093> **Access Denied**");
	const sayMessage = args.join(' ');
	message.delete().catch();
	message.channel.send(`${sayMessage}`);
}
