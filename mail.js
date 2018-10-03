const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');

client.on(`ready`, () => {
  console.log(`I am on!`);
client.user.setActivity('with her +help string toy');

});

client.on('message', message => {
  
    if (message.content === `${prefix}hello`) {
    message.channel.send(`Meow.`);
   }
    if (message.content === `${prefix}help`) {
    message.channel.send(`Commands: +hello, +meow, +cat`)
    message.react("🐱");
    
  }
  
    if (message.content === `${prefix}meow`) {
    message.channel.send(`Bark!`);
      
    }
  
  if (message.content === `${prefix}cat`) {
     request.get('https://aws.random.cat/meow');
     message.channel.send(body.file);
}
    
    });     
client.login(process.env.BOT_TOKEN);
