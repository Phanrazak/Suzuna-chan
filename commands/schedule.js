const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://github.com/MalitsPlus/ShizuruNotes')
			.setTitle('February')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://i.imgur.com/UucGzkl.png');
		message.channel.send(embed);
		
  }
	}