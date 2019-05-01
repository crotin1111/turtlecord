const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
 
// Set the prefix
let prefix = "tc ";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  if (message.content.startsWith(prefix + "info")) {

const userinfo = new Discord.RichEmbed()
	.setColor('#ff0000')
	.setTitle('')
	.setURL('')
	.setAuthor(message.author.username, message.author.avatarURL, '')
	.setDescription("Here's your requested information ")
	.setThumbnail(message.author.avatarURL)
	.addBlankField()
	.addField('Your Name', message.member.user, true)
  .addField('Your Rank', message.member.highestRole, true)
  .addField('Join Date', message.member.joinedAt, true)
  .setImage()
  .addBlankField()
  .setTimestamp()
	.setFooter('Turtlecord User Information' , message.client.avatarURL);
  

message.channel.send(userinfo);
  }
  if (message.content.startsWith(prefix + "setup")) {
    message.author.send("I'm already setup.")
  }
});
 
client.login(token);