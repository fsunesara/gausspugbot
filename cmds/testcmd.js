const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {
    message.channel.send('hoo wee');
}

module.exports.help = {
    name: 'testcmd'
}