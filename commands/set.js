const Discord = require('discord.js');
const cards = require('./cards');
var cardsList;
try {
	cardsList = require('./cardsList.json');
}
catch (e){
	console.log('error with config: '+e.message);
	process.exit();
}
module.exports = {
	name: 'set',
	aliases: ['s'],
	description: "For now this is just a test to see if I can write onto cardsList.json",
	execute(message, args){
        var userid = cardsList[message.author.id];
        cardsList(userid, args[0], args[1]);
        message.channel.send('it is done!')
    }
}