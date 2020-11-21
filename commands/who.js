const Discord = require('discord.js');
var CharaInfo;
try {
	CharaInfo = require('./CharaInfo.json');
}
catch (e){
	console.log('error with CharaInfo: '+e.message);
	process.exit();
}
module.exports = {
    name: 'who',
    aliases: 'whois',
    description: 'A command that lists out character\'s skills and info. Description is based on my own comments about the characters. Some biases are to be expected ',
    execute(message, args){
        const embed = new Discord.MessageEmbed();
        var Chara = Object.keys(CharaInfo);
        
        embed.setTitle('Yo!');
        embed.setTimestamp(Date.now());
        embed.setDescription('You can now click on the name for a link to the full card! This is to fit in more text and also save banwidth if you\'re on a limited quota');
        embed.setColor('#FFB9B9');
        embed.setFooter("Suzuna-Chan","https://i.imgur.com/jNqJW4V.png");
        var args_lower = args.join(' ').toLowerCase();
        if (Chara.includes(args_lower)){  
            let CharaItem = CharaInfo[args_lower];
            embed.setAuthor(CharaItem.name,CharaItem.image);
            embed.setTimestamp(Date.now());
            embed.setDescription(CharaItem.description || "This is not supposed to show up. Make sure to make it an issue in the github page so I know that this is a problem");
            embed.setTitle(CharaItem.kana || 'No known aliases');
            embed.setURL(CharaItem.large);
            embed.setFooter(CharaItem.guild || 'No Guild','https://i.imgur.com/jNqJW4V.png');
            embed.addFields(
                { name: "UB: "+CharaItem.ubname, value: CharaItem.ubdesc},
                { name: "S1: "+CharaItem.s1name, value: CharaItem.s1desc, inline: true},
                { name: "S2: "+CharaItem.s2name, value: CharaItem.s2desc, inline: true},
                { name: "EX: "+CharaItem.exname, value: CharaItem.exdesc, inline: true},
                { name: "S1+: "+CharaItem.s1name+"+", value: CharaItem.s1plus || "Soon:tm:", inline: true},
                { name: "6★ UB: "+(CharaItem.upgrade || "Not yet implemented"), value: CharaItem.upgradedesc || "Not yet implemented"},
                { name: "Initial Loop: ", value: CharaItem.initial|| "too lazy to write", inline: true},
                { name: "Loop Pattern: ", value: CharaItem.loop || "too lazy to write", inline: true}
            );
        }
        message.channel.send(embed);
    }
}