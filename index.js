const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

client.once('ready', () => {
	console.log('Ready');

});

client.login(token);

client.on('message', message => {
	console.log(message.content);
});
