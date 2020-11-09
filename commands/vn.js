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

        var res0 = await vndb.write(`get vn basic,details (search ~ "${args.join(' ')}")`);
        res0 = JSON.parse(res0.substring(7));

	  const embed = new Discord.MessageEmbed()
			.setAuthor(res0.items[0].title,'https://s.vndb.org/s/angel/bg.jpg','https:/\/www.vndb.org/v'+res0.items[0].id)
			.setDescription('Click for more details')
			.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
			//.setThumbnail('https://i.imgur.com/jNqJW4V.png')
			.setColor('#FFB9BE')
			.setURL('https:/\/www.vndb.org/v'+res0.items[0].id)
			.setTitle(res0.items[0].original || res0.items[0].title)
			.setTimestamp(Date.now())
			.setImage(res0.items[0].image);
        message.channel.send(embed);
    }
}