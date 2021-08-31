const Discord = require ('discord.js');
module.exports = {
	name: 'info',
	aliases: ['i', 'information', 'about'],
	description: "info about the bot",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setAuthor('Phan','https://cdn.discordapp.com/emojis/580237219139289091.png','https://github.com/Phanrazak/Suzuna-chan')
			.setDescription('I made this :). Click on the link to go to the github to submit any issues or something.')
			.setFooter('Suzuna-Chan v0.1','https://i.imgur.com/jNqJW4V.png')
			.setThumbnail('https://redive.estertion.win/card/full/180731.webp')
			.setColor('#FFB9BE')
			.setURL('https://github.com/Phanrazak/Suzuna-chan')
			.setTitle('ちょす！')
			.setTimestamp(Date.now())
			.setImage('https://redive.estertion.win/card/story/180700101.webp');
		message.channel.send(embed);
  	}
}