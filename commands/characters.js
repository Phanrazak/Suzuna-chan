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
    name: 'characters',
    aliases: 'chara, character, who, whois',
    description: 'A command that lists out character\'s skills and info. Description is based on my own comments about the characters. Some biases are to be expected ',
    execute(message, args){
        const embed = new Discord.MessageEmbed();
        var Chara = Object.keys(CharaInfo);

        embed.setTitle('Here are the list of all the characters, Hope Phan keeps it updated!');
        embed.setTimestamp(Date.now());
        embed.setDescription(Chara.join(', '));
        embed.setColor('#FFB9B9')
        embed.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png');
        var args_lower = args.join(' ').toLowerCase();
        if (Chara.includes(args_lower)){  
            let CharaItem = CharaInfo[args_lower];
            embed.setAuthor(CharaItem.name,CharaItem.image);
            embed.setDescription(CharaItem.description || "This is not supposed to show up. Make sure to make it an issue in the github page so I know that this is a problem");
            embed.setTitle(CharaItem.kana || 'No known aliases');
            embed.setThumbnail(CharaItem.image)
            embed.setFooter(CharaItem.guild || 'No Guild','https://i.imgur.com/jNqJW4V.png');
            embed.addFields(
                { name: "UB: "+CharaItem.ubname, value: CharaItem.ubdesc, inline: true},
                { name: "S1: "+CharaItem.s1name, value: CharaItem.s1desc, inline: true},
                { name: "S2: "+CharaItem.s2name, value: CharaItem.s2desc, inline: true},
                { name: "EX: "+CharaItem.exname, value: CharaItem.exdesc, inline: true},
                { name: "S1+: "+CharaItem.s1name+'+', value: CharaItem.s1plus || 'Soon:tm:', inline: true},
                { name: '6★ UB: '+(CharaItem.upgrade || 'Not yet implemented'), value: CharaItem.upgradedesc || "Not yet implemented"}
            );
        }
        message.channel.send(embed);
    }
}