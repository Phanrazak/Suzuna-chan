const Discord = require ('discord.js');
module.exports = {
	name: 'info',
	aliases: ['i', 'information', 'about'],
	description: "info about the bot",
	execute(message){
	  const embed = new Discord.MessageEmbed()
			.setAuthor('Phan','https://cdn.discordapp.com/emojis/580237219139289091.png','https://github.com/Phanrazak/Suzuna-chan')
			.setDescription('This bot was made specifically for PhanCord, it\'s basically a pet project that I wanted to do for pulling tweets off of the priconne dev channel and to store all of the friend cards. If you want, you can always view the source code')
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setThumbnail('https://i.imgur.com/jNqJW4V.png')
			.setColor('#FFB9BE')
			.setURL('https://www.twitter.com/Phanrazak')
			.setTitle('Twidder')
			.setTimestamp(Date.now())
			.setImage('https://i.imgur.com/T02C8j7.png');
		message.channel.send(embed);
		
  }
	}