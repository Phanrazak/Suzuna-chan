const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://twitter.com/fishn_prcn/status/1355874885952630789')
			.setTitle('February')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://i.imgur.com/12cT0jn.png');
		message.channel.send(embed);
		
  }
	}