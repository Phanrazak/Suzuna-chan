const Discord = require('discord.js');
var Config;
try {
	Config = require('./config.json');
}
catch (e){
	console.log('error with config: '+e.message);
	process.exit();
}
const client = new Discord.Client();
const twit = require('./commands/pulltweets.js')
twit.run(client)

const prefix = '^';

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('ちょす');
	client.user.setPresence({
		status: 'idle',
		activity: {name:'^help',type: 'LISTENING',url: 'https://twitch.tv/PhanPhan'}
	});
});

client.on('message', message =>{
	
    if(!message.content.startsWith(prefix) || message.author.bot){
		if (message.content.toLowerCase().includes('cock')){
			var emote = client.emojis.cache.find(emoji => emoji.name === "YEP");
			message.react(emote);
		}
		return;
	}	
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const term = client.commands.get(command) || client.commands.find(
		cmd => cmd.aliases && cmd.aliases.includes(command));
		
	if (term) {
		console.log(Date(Date.now()).toString()+" "+command+" from "
		+(message.member === null ? message.author.username : message.member.displayName)); 
		term.execute(message, args);
		
	}
});

client.login(Config.token);