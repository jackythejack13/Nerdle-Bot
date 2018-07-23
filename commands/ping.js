exports.run = async(client, message, args) => {
	
  const m = await message.channel.send("Pinging...");
  m.edit(`Ping: ${m.createdTimestamp - message.createdTimestamp}ms`);
	
}
