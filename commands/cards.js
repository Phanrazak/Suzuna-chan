const Discord = require ('discord.js');
module.exports = {
	name: 'cards',
	aliases: ['card','c'],
	description: "card command",
	execute(message, args){
		const embed = new Discord.MessageEmbed()
			.setDescription('If you wanna update your card, pls post an issue on the github')
			.setColor('#FFB9BE')
			.setURL('https://imgur.com/a/MWArJMx')
			.setTitle('Imgur')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://i.imgur.com/zubi0Hn.jpg');
			
		var userList = [
			{name: "phan", image: "https://i.imgur.com/ehO6XuM.png"},
			{name: "alta", image: "https://i.imgur.com/IG2JLA2.png"},
			{name: "alpaca", image: "https://i.imgur.com/MGuTT7D.png"},
			{name: "golf", image: "https://i.imgur.com/Jg7GdAp.png"},
			{name: "len", image: "https://i.imgur.com/AmqqlLT.png"},
			{name: "shluf", image: "https://i.imgur.com/Fq1OgkW.png"},
			{name: "damkuna", image: "https://i.imgur.com/Vym5Qs1.png"},
			{name: "aer0", image: "https://i.imgur.com/7O2CuN6.png"},
			{name: "stack", image: "https://i.imgur.com/jdaAvqH.png"},
			{name: "tibi", image: "https://i.imgur.com/O33RKHa.png"},
			{name: "meepo", image: "https://i.imgur.com/270fr1M.png"}
		];		
		for (var i = 0; i < userList.length; i++) {
			if (args[0] === userList[i].name){
				embed.setImage(userList[i].image);
				break;
			}
			}
		message.channel.send(embed);
	}
}