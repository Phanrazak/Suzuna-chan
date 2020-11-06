const Discord = require ('discord.js');
module.exports = {
	name: 'schedule',
	description: "schedule commands",
	execute(message, args){
  if (args[0] === 'source') {
        message.channel.send('Nishikuma: <https://twitter.com/nishikkuma/status/1322591138809749507>');
  }
  else {
	  const embed = new Discord.MessageEmbed()
			.setColor('#FFB9BE')
			.setURL('https://twitter.com/nishikkuma/status/1322591138809749507')
			.setTitle('November')
			.setImage('https://pbs.twimg.com/media/ElrJY_jUYAAm9C-.jpg:large');
		message.channel.send(embed);
		
  }
	}
}