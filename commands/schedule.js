const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "Schedule for Priconne, will be updated monthly",
	execute(message){
		var emote2 = client.emojis.cache.find(emoji => emoji.name === "pepesteer");
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://twitter.com/kororon2020/status/1400072263513169926')
			.setTitle('SSaren this this month'+emote2)
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://i.imgur.com/SJJzc94.png');
		message.channel.send(embed);
		
  }
	}