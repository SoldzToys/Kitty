const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const moment = require('moment');
require('moment-duration-format');

client.on(`ready`, () => {
  console.log(`I am on!`);
client.user.setActivity('with her +help string toy');

});

client.on('message', async (message) => {
  
if (message.content.toLowerCase().startsWith(`${prefix}ping`)) {
        message.channel.send('🏓 **Pong!** Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
          }
    
if (message.content.toLowerCase().startsWith(`${prefix}hello`)) {
    message.channel.send(`Meow meow~!`);
   }
    if (message.content === `${prefix}help`) {
        let dogembed = new Discord.RichEmbed()
        .setTitle("Kitty's Commands 🐱")
        .setDescription("Commands: +cat, +hello, +meow, +ping, +info, +say")
           .setColor("#7289da");
          message.react("🐱");
     message.channel.send(dogembed);
  }
  
    if (message.content === `${prefix}meow`) {
    message.channel.send(`Bark!`);
      
    } 
	
			 if (message.content.toLowerCase().startsWith(`${prefix}say`)) {
		  let args = message.content.split(/ +/g).slice(1)
		  let botmessage = args.join(' ')
		  let player = message.mentions.members.first() || message.member
                  let user = player.user
		const sayembed = new Discord.RichEmbed()
		.setTitle(`${botmessage}`)
               .setColor("#7289da")
	       .setFooter(`Requested By ${user.tag}`)
		 return message.channel.send(sayembed)
	 }
if (message.content.toLowerCase().startsWith(`${prefix}info`)) {

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setDescription(`Information on ${client.user.username}`)
    .setColor("#7289da")
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username, true)
    .addField("Bot Tag", client.user.tag, true)
    .addField("ID", client.user.id, true)
    .addField("Uptime", moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]'), true)
    .addField("Date Of Creation", client.user.createdAt.toLocaleString(), true)
    .addField("Guilds", client.guilds.size, true)
    .addField("Users", client.users.size, true)
    .addField("Invite Me To Your Server", "https://bit.ly/2CJLh83", true)
    .setFooter("Made By Soldz (CF)#6819")
    .setTimestamp();
    return message.channel.send(botembed);
  }
  
if (message.content.toLowerCase().startsWith(`${prefix}cat`)) {
    let { body } = await request.get('https://aws.random.cat/meow');
  let dogembed = new Discord.RichEmbed()
.setColor("#7289da")
.setTitle("Cat 🐱")
.setImage(body.file);
message.channel.send(dogembed);
}
});
  
	client.on('guildCreate', guild => {
  let channel = client.channels.get("499832353544470539");

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



client.on('guildDelete', guild => {
  let channel = client.channels.get("499832353544470539");

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

client.on("guildUpdate", function (oldGuild, newGuild, guild) {
         let channel = client.channels.get("499832353544470539");
	 let gicon = guild.iconURL;
        const eeembed = new Discord.RichEmbed()
            .setColor("#7289da")
            .setThumbnail(gicon)
            .setAuthor(`A Guild Has been Updated`)
            .addField(`Old Guild Name:`, `${oldGuild}`)
            .addField(`New Guild Name:`, `${newGuild}`)
        return channel.send(eeembed);
}); 

client.on("guildUnavailable", guild => {
         let channel = client.channels.get("499832353544470539");
	
        const eeeembed = new Discord.RichEmbed()
            .setColor("#7289da") 
            .setAuthor(`${guild} has become unavailable.`)
	    .addField("Owner", guild.owner.user.tag)
            .addField("ID", guild.id, true)
        return channel.send(eeeembed);
});
	
client.login(process.env.BOT_TOKEN);
