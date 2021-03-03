const Discord = require('discord.js');
const VNDB = require('vndb');
module.exports = {
    name: 'character',
    aliases: ['chara', 'characters'],
    description: 'search and pull vn characters from the vndb website',
    async execute(message, args){
        var vndb;     
        try {
            vndb = await VNDB.start();
            console.log('Connected to VNDB');
            await vndb.write ('login {"protocol":1,"client":"Suzuna-chan bot","clientver":0.1}');
        } 
        catch (e) {
            console.log('Something happened when connecting to VNDB API');
        }

        const res0 = await vndb.write(`get character basic,details (name ~ "${args.join(' ')}")`);
        const res1 = JSON.parse(res0.substring(7));
        message.channel.send(`Here's what I found:\n${res1.items[0].name}\n${res1.items[1].name}\n${res1.items[2].name}\n${res1.items[3].name}\n${res1.items[4].name}\n${res1.items[5].name}\n${res1.items[6].name}\n${res1.items[7].name}\n${res1.items[8].name}\n${res1.items[9].name}`)
       /*  var gender
        switch (gender) {
            case 1 value: male
                
                break;
            case 2 value: female
                
                break;
            case 3 value: both?
                
                break;
        
            default:
                break;
        };
	  const embed = new Discord.MessageEmbed()
			.setAuthor(res1.items[0].title,'https://s.vndb.org/s/angel/bg.jpg','https:/\/www.vndb.org/v'+res1.items[0].id)
			.setDescription("Original release date: "+(res1.items[0].released|| "Not yet released")+"\nCurrently released on: "+(res1.items[0].platforms|| "Not yet released")+"\nLength: "+gamelength+"\nLanguages Available: "+(res1.items[0].languages||"N/A")+"\nClick link for full vndb page")
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			//.setThumbnail('https://i.imgur.com/jNqJW4V.png')
			.setColor('#FFB9BE')
			.setURL('https:/\/www.vndb.org/v'+res1.items[0].id)
			.setTitle(res1.items[0].original || res1.items[0].title)
			.setTimestamp(Date.now())
			.setImage(res1.items[0].image || "https://s.vndb.org/s/angel/bg.jpg");
        message.channel.send(embed);*/

    }
}