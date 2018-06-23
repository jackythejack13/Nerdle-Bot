exports.run = async(client, message, args) => {
	
  const m = await message.channel.send("Ping?");
  m.edit(`:ping_pong: Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
	
}
