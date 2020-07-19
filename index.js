const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready');
});

client.login('NzM0NDk2NTIyMTkyMDI3Njg4.XxSyFw.uiP2qLI6xlV8FLfu8gwa3PkiISc');

client.on('message', message => {
	console.log(message.content);
});