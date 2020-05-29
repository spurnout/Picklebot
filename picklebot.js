const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


\\ when a new member joins, this code checks to see how old the account is and bans if its under 5 minutes old
client.on('guildMemberAdd', member => {
    ]
if (Date.now() - user.CreatedAt <= 300) {
	guildMember.ban({ days: 14, reason: 'New Account' })
	.then(console.log)
	.catch(console.error);

}}
	

client.login('token');
