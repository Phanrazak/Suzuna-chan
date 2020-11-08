const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'a command that lists out all of the other commands',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        embed.setAuthor('Phan','https://cdn.discordapp.com/emojis/580237219139289091.png','https://github.com/Phanrazak/Suzuna-chan')
        embed.setTitle('Placeholder for now until I update the documentations and put all the commands and their descriptions')
        embed.setTimestamp(Date.now())
        embed.setDescription('help, info, ping, schedule, cards')
        embed.setFooter('Suzuna-Chan','https://i.imgur.com/jNqJW4V.png')
        
        message.channel.send(embed);
        }
}