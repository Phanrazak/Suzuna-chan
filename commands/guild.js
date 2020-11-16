const Discord = require('discord.js');
const client = new Discord.Client();
var pageList;
try {
	pageList = require('./page.json');
}
catch (e){
	console.log('error with pageList: '+e.message);
	process.exit();
}
module.exports = {
    name: 'guild',
    aliases: ['g','guilds'],
    description: 'Lists out characters in priconne by guilds',
    execute(message){
        const embed = new Discord.MessageEmbed();
        var page = pageList["one"];
        
        embed.setTitle('Yo!');
        embed.setTimestamp(Date.now());
        embed.setDescription('Flip through the page to see who\'s there');
        embed.setColor('#FFB9B9');
        embed.setFooter("Page "+page.page+"/2","https://i.imgur.com/jNqJW4V.png");
        embed.addFields(
            {name: page.guild1, value: page.value1, inline: true},
            {name: page.guild2, value: page.value2, inline: true},
            {name: page.guild3, value: page.value3, inline: true},
            {name: page.guild4, value: page.value4, inline: true},
            {name: page.guild5, value: page.value5, inline: true},
            {name: page.guild6, value: page.value6, inline: true},
            {name: page.guild7, value: page.value7, inline: true},
            {name: page.guild8, value: page.value8, inline: true},
            {name: page.guild9, value: page.value9, inline: true}
        );
        message.channel.send(embed)
            .then(m => {
                m.react('➡️');

                const filter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
                const collector = m.createReactionCollector(filter, { max: 2, time: 1 * 60 * 1000 }); 

                collector.on('collect', () => {
            var page = pageList["two"];
            embed.setFooter("Page "+page.page+"/2","https://i.imgur.com/jNqJW4V.png");
            embed.spliceFields(0,9,
                {name: page.guild1, value: page.value1, inline: true},
                {name: page.guild2, value: page.value2, inline: true},
                {name: page.guild3, value: page.value3, inline: true},
                {name: page.guild4, value: page.value4, inline: true},
                {name: page.guild5, value: page.value5, inline: true},
                {name: page.guild6, value: page.value6, inline: true},
                {name: page.guild7, value: page.value7, inline: true},
                {name: page.guild8, value: page.value8, inline: true},
                {name: page.guild9, value: page.value9, inline: true}
            );
            m.edit(embed);
            m.react.stop
        })
        });
    }
}