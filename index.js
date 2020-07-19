const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready');
});

//client.login(); REMOVED TOKEN OOPS

client.on('message', message => {
	console.log(message.content);
});
