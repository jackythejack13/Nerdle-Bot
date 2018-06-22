exports.run = async(client, message, args) => {

  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  
  let uptime = `${days} d, ${hours} hr, ${minutes} mins, ${seconds} secs`;
  
  message.channel.send(`:stopwatch: Uptime: \`${uptime}``);
  
}
