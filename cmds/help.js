const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {
	let cmd = client.commands.get(args[0]);
	if(cmd) {
		message.channel.send(`we did it ${cmd.help.name}`);
	} else {
		message.channel.send('No such command exists!');
	}
	//message.channel.send(`args ${args}`);
}

module.exports.help = {
	name: 'help'
}