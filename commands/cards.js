const Discord = require ('discord.js');
var cardsList;
try {
	cardsList = require('./cardsList.json');
}
catch (e){
	console.log('error with config: '+e.message);
	process.exit();
}
module.exports = {
	name: 'cards',
	aliases: ['card','c'],
	description: "This command is used for priconne friend cards to be displayed according to the latest one that you updated the bot with",
	execute(message, args){
		const embed = new Discord.MessageEmbed()
			.setDescription('I haven\'t made a set command yet. The command wil be tied to your discord ID. So you cannot set for someone else')
			//('Please do ^c set [name] [image link]. I\'ll add the image to imgur later')
			.setColor('#FFB9BE')
			.setURL('https://imgur.com/a/MWArJMx')
			.setTitle('Imgur')
			.setTimestamp(Date.now())
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			.setImage('https://i.imgur.com/zubi0Hn.jpg');

			var Uid = cardsList[message.author.id];
			if (Uid) {
				embed.setDescription('You\'re a cutie');
			  	embed.setImage(Uid.image);
				embed.setTitle(Uid.name);
			}
			
		message.channel.send(embed);
	}
}

		/*
		for (var i = 0; i < userList.length; i++) {
			if (args[0] === userList[i].name){
				embed.setImage(userList[i].image);
				embed.setTitle(userList[i].name);
				break;
			}
			}*/