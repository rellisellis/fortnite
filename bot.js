var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'image') {
        message.channel.send('Message that goes above image', {
            files: [
                "./image-to-send.png"
            ]
        });
    }
});

bot.login('NTY0MTExOTU3Nzc5ODA4Mjg3.XKojKg.BoUrspUwLbrmxU2xcXYSsF4EGwo');
