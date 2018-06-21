exports.run = aysnc(client, message, args) => {

  let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('**Invalid Format:** `!Poll <Question>`')
  
  message.channel.send(`<:blobconcil:459168698033504278> **${question}**`)
  
  message.react('<:Upvote:422535662470955009>')
  .then(() => message.react('<:Downvote:422535673984319498>'))
  .catch(() => console.error('Emoji failed to react.'));

}
