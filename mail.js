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
        message.channel.send('🏓 **Pong!** Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
          }
    
    if (message.content === `${prefix}hello`) {
    message.channel.send(`Meow meow~!`);
   }
    if (message.content === `${prefix}help`) {
        let dogembed = new Discord.RichEmbed()
        .setTitle("Kitty's Commands 🐱")
        .setDescription("Commands: +hello, +meow, +cat, +ping")
           .setColor("#7289da");
          message.react("🐱");
     message.channel.send(dogembed);
  }
  
    if (message.content === `${prefix}meow`) {
    message.channel.send(`Bark!`);
      
    }
  
if (message.content === `${prefix}cat`) {
    let { body } = await request.get('https://aws.random.cat/meow');
  let dogembed = new Discord.RichEmbed()
.setColor("#7289da")
.setTitle("Cat 🐱")
.setImage(body.file);
message.channel.send(dogembed);
});
  
  client.on('guildCreate', guild => {
  let channel = bot.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor("#7289da")
      .setAuthor(`Joined ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});



// When bot leave the server
client.on('guildDelete', guild => {
  let channel = bot.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor("#7289da")
      .setAuthor(`Left ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});


    
    });     
client.login(process.env.BOT_TOKEN);
