var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'image') {
        message.channel.send('Message that goes above image', {
            files: [
                "https://esportsjunkie.com/wp-content/uploads/2019/04/HowFortniteWonSite.png.jpeg"
            ]
        });
    }
});

bot.login('NTY0NDg1NDY1MDU5NzUzOTg1.XLDVwA.ryersAbVje1qPCM7FPChOcG178Q');
