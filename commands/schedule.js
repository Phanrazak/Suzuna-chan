const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://pbs.twimg.com/media/EqyTZd7VQAEIX-3?format=png&name=orig')
			.setTitle('January')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://pbs.twimg.com/media/EqyTZd7VQAEIX-3?format=png&name=orig');
		message.channel.send(embed);
		
  }
	}