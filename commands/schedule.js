const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://twitter.com/nishikkuma/status/1322591138809749507')
			.setTitle('November')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://pbs.twimg.com/media/ElrJY_jUYAAm9C-.jpg:large');
		message.channel.send(embed);
		
  }
	}