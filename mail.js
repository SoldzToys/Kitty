const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');

client.on(`ready`, () => {
  console.log(`I am on!`);
client.user.setActivity('with her +help string toy');

});

client.on('message', async (message) => {
  
  if (message.content ===(`${prefix}ping`)) {
        message.channel.send('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
          }
    
    if (message.content === `${prefix}hello`) {
    message.channel.send(`Meow meow~!`);
   }
    if (message.content === `${prefix}help`) {
    message.channel.send(`Commands: +hello, +meow, +cat, +ping`)
    message.react("🐱");
    
  }
  
    if (message.content === `${prefix}meow`) {
    message.channel.send(`Bark!`);
      
    }
  
if (message.content === `${prefix}cat`) {
    let { body } = await request.get('https://aws.random.cat/meow');
  let dogembed = new Discord.RichEmbed()
.setColor("#7289da")
.setTitle("Cat :cat:")
.setImage(body.file);
message.channel.send(dogembed);
}
    
    });     
client.login(process.env.BOT_TOKEN);
