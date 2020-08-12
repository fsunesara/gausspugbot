//require packages
const Discord = require('discord.js');
const fs = require('fs');
const {prefix, token} = require('./config.json');

//initialize bot
const client = new Discord.Client({disableMentions: 'everyone'});
client.commands = new Discord.Collection();

//read command files
fs.readdir('./cmds/', (err, files) => {
	 if(err) console.error(err);

	 let cmdFiles = files.filter(f => f.split('.').pop() === 'js');
	 if(cmdFiles.length <= 0) {
		 console.log('No commands to load!');
		 return;
	}

	 cmdFiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		client.commands.set(props.help.name, props);
	});
});

client.once('ready', async () => {
	console.log('Gauss is ready.');

	// console.log('Generating invite link...');

	// try {
	// 	let inviteLink = await client.generateInvite(['EMBED_LINKS', 'MOVE_MEMBERS']);
	// 	console.log(inviteLink);
	// } catch (e) {
	// 	console.log(e);
	// }
});

client.on('message', async message => {
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	
	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;

	let cmd = client.commands.get(command.slice(prefix.length));
	if(cmd) {
		cmd.run(client, message, args);
	} else {
		message.channel.send('Error: Command not found.');
	}
});

client.login(token);

client.on('error', (err) => console.error(err));
client.on('warn', (err) => console.warn(err));
// client.on('debug', (e) => console.info(e));
