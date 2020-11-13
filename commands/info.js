const Discord = require ('discord.js');
module.exports = {
	name: 'info',
	aliases: ['i', 'information', 'about'],
	description: "info about the bot",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setAuthor('Phan','https://cdn.discordapp.com/emojis/580237219139289091.png','https://github.com/Phanrazak/Suzuna-chan')
			.setDescription('')
			.setFooter('Suzuna-Chan v0.1','https://i.imgur.com/jNqJW4V.png')
			.setThumbnail('https://i.imgur.com/jNqJW4V.png')
			.setColor('#FFB9BE')
			.setURL('https://www.twitter.com/Phanrazak')
			.setTitle('Twidder')
			.setTimestamp(Date.now())
			.setImage('https://i.imgur.com/T02C8j7.png');
		message.channel.send(embed);
		
  	}
}