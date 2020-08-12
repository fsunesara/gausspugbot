const Discord = module.require('discord.js');
const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports.run = async (client, message, args) => {
	if(message.member.voice.channel) {
		const streamOptions = { seek: 0, volume: 1 };
		message.member.voice.channel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=tYOZMLKy3x4', { filter : 'audioonly' });
			const dispatcher = connection.play(stream, streamOptions);
			dispatcher.on('finish', () => {
				message.member.voice.channel.leave();
			});
		}).catch(err => console.log(err));
	} else {
		message.channel.send('Error: Must be connected to a voice channel.');
	}
}

module.exports.help = {
    name: 'attention'
}