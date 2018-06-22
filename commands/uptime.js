exports.run = async(client, message, args) => {

	setInterval(function() {
		upSecs = upSecs + 1
		if (upSecs >= 60) {
			var userdisplay = states[Math.floor(Math.random() * states.length)];
			c.user.setStatus(userstatus)
			c.user.setGame(userdisplay)
			upSecs = 0
			upMins = upMins + 1
		}
		if (upMins >= 60) {
			upMins = 0
			upHours = upHours + 1
		}
		if (upHours >= 24) {
			upHours = 0
			upDays = upDays + 1

		}


	}, 1000)



})

message.channel.send("```Current Uptime: \n" + upDays + " Days \n" + upHours + " Hours \n" + upMins + " Minutes \n" + upSecs + " Seconds```");
  
}
