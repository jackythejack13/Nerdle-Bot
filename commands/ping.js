exports.run = (client, message, args) => {

  message.channel.send("Ping?").then(sentMessage => sentMessage.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`));
  //message.channel.send("Ping?");
  //msg.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);

}
