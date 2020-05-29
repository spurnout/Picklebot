const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


bot.on('guildMemberAdd', member => {
    \\code to check if a user account is newly made within 5 minutes and if so to ban them
if (Date.now() - user.CreatedAt <= 300) {
	guildMember.ban({ days: 14, reason: 'New Account' })
	.then(console.log)
	.catch(console.error);

}}
\\ still need to encapsulate this if statement above in a check for when new users join the server
	

client.login('token');
