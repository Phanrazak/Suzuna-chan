const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://twitter.com/kororon2020/status/1423202098682810370')
			.setTitle('I love lolis')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://i.imgur.com/kQY2NWW.png');
		message.channel.send(embed);
		
  }
	}