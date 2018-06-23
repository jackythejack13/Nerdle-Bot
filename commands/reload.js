exports.run = (client, message, args, ops) => {
  
  if (message.author.id !== ops.ownerID) return message.channel.send('Sorry, only the **Jackohh#6423** can use this command.');
  
  try {
    delete require.cache[require.resolve(`./${arg[0]}`)];
  } catch (e) {
      return message.channel.send(`Unable to reload: ${args[0]}`);
  }
  
  message.channel.send(`Successfully reloaded: ${args[0]}`);

}
