exports.run = async(client, message, args) => {
	
	message.channel.send('Pinging...').then(sent => {
    sent.edit(`Ping: ${sent.createdTimestamp - message.createdTimestamp}ms`);
	
	});
	
}
