exports.run = async(client, message, args) => {

  let totalSeconds = (client.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  
  let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  
  message.channel.send(uptime);
  
}
