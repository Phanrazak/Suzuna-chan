const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://twitter.com/kororon2020/status/1434139480277934084?s=20')
			.setTitle('It is Sept my dudes')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://pbs.twimg.com/media/E-cWKh1VQAUNb_V?format=png&name=orig');
		message.channel.send(embed);
		
  }
	}