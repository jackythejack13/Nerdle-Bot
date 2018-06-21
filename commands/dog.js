exports.run = async(client, message, args) => {

      const sendDog = function()
      {
        const request = require('request');
        const url = 'http://random.dog/woof';
        request({
          url: url,
          json: false
        }, function (error, response, body)
        {
          if(!error && response.statusCode === 200)
          {
            bot.sendMessage(details.channelID, {
              embed:{
                title: '',
                description: '',
                image:{
                  url: `http://random.dog/${body}`
                }
              }
            }).catch((err) =>
            {
              console.log(`In dog: ${err}`);
            });
          }
      if(details.input === '')
      {
        sendDog();

}
