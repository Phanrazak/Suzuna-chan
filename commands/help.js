const Discord = require('discord.js');
var helpList;
try {
	helpList = require('./helpList.json');
}
catch (e){
	console.log('error with helpList: '+e.message);
	process.exit();
}
module.exports = {
    name: 'help',
    description: 'a command that lists out all of the other commands',
    execute(message, args){
        const embed = new Discord.MessageEmbed();
        var commands = Object.keys(helpList);
        embed.setAuthor('Phan','https://cdn.discordapp.com/emojis/580237219139289091.png','https://github.com/Phanrazak/Suzuna-chan');
        embed.setTitle('Helping!');
        embed.setTimestamp(Date.now());
        embed.setDescription(commands.join(', '));
        embed.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png');
        if (commands.includes(args[0])) {
            embed.setDescription(helpList[args[0]].description);
            embed.setAuthor(args[0]);
            embed.setTitle('Aliases: '+(helpList[args[0]].aliases || 'No known aliases'));
        }
        message.channel.send(embed);
        }
}