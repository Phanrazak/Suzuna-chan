const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('')
			.setTitle('It is Sept my dudes')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://cdn.discordapp.com/attachments/680749508547706887/882157125625839647/Screenshot_20210830-235646.png');
		message.channel.send(embed);
		
  }
	}