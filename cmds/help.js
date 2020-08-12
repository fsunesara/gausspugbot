const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {
	let cmd = client.commands.get(args[0]);
	if(cmd) {
		message.channel.send(`we did it ${cmd.help.name}`);
	} else {
		message.channel.send('Error: No such command exists.');
	}
}

module.exports.help = {
	name: 'help'
}