require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("ok"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('I am poor!');
});

client.on ("message", (message) => {
    if(message.content.startsWith('!no-nitro1')) {
        message.channel.send('<:poorakeet1:760356171000709130>').then(e_msg => {
            e_msg.edit('<:poorakeet2:760356207994077194>'); 
            e_msg.edit('<:poorakeet3:760356238528610337>'); 
            e_msg.edit('<:poorakeet4:760356278345269288>'); 
            e_msg.edit('<:poorakeet5:760356315573911572>'); 
            e_msg.edit('<:poorakeet6:760356355705667664>'); 
            e_msg.edit('<:poorakeet7:760356431143763979>'); 
            e_msg.edit('<:poorakeet8:760356431143763979>'); 
            e_msg.edit('<:poorakeet9:760356467135741953>'); 
            e_msg.edit('<:poorakeet10:760356501570846720>'); 
        });
    }
    else if((message.content.startsWith('!no-nitro2'))) {
        message.react('760356171000709130');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356207994077194');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356238528610337');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356278345269288');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356315573911572');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356355705667664');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356407185768469');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356431143763979');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356467135741953');
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        message.react('760356501570846720');
    }
})




client.login('NzYwMzQ0NjM3NzA0NzY1NDQw.X3KsIA.DpTEKdVS-OIuXzYePC6FpkMx-Qs');