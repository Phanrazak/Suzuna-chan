const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://twitter.com/kororon2020/status/1334841986650570753')
			.setTitle('December')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://pbs.twimg.com/media/EoZPfdnVoAAWLMB?format=jpg&name=orig');
		message.channel.send(embed);
		
  }
	}