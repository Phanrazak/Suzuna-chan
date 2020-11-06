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

const prefix = '~'

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('ちょす');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'schedule'){
        client.commands.get('schedule').execute(message, args);
    } 
});

client.login(Config.token);