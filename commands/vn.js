const Discord = require('discord.js');
const VNDB = require('vndb');
module.exports = {
    name: 'vn',
    aliases: ['novel', 'visualnovel'],
    description: 'search and pull vn data from the vndb website',
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

        const res0 = await vndb.write(`get vn basic,details (search ~ "${args.join(' ')}") {"sort": "popularity", "reverse": true}`);
        const res1 = JSON.parse(res0.substring(8));
        var gamelength;
        switch (res1.items[0].length) {
            case 1: gamelength = "less than 10 hours"; break;
            case 2: gamelength = "10-20 hours"; break;
            case 3: gamelength = "20-40 hours"; break;
            case 4: gamelength = "40-60 hours"; break;
            case 5: gamelength = "expect 100 hours"; break;
            default: gamelength = "Who knows?";
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
        message.channel.send(embed);
    }
}