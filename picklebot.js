/* Planned functionality includes:
Auto ban new accounts made within 5 minutes that join
Auto kick new accounts that do not have a profile pic with a DM to that user to add a pfp before joining again
Create a human verification system so instead of a reaction to the rules, they get a DM, react to it there, and then a random 4 number combination will be shown in emojis that they will need to type out to be verified as human to receive the Basic role, on my server that's Kidult
*/


/* saving this for the future, it will allow me to add human verification in the future using a random number or letter combo and have them type it out
module.exports = {
	a: '🇦', b: '🇧', c: '🇨', d: '🇩',
	e: '🇪', f: '🇫', g: '🇬', h: '🇭',
	i: '🇮', j: '🇯', k: '🇰', l: '🇱',
	m: '🇲', n: '🇳', o: '🇴', p: '🇵',
	q: '🇶', r: '🇷', s: '🇸', t: '🇹',
	u: '🇺', v: '🇻', w: '🇼', x: '🇽',
	y: '🇾', z: '🇿', 0: '0️⃣', 1: '1️⃣',
	2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣',
	6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣',
	10: '🔟', '#': '#️⃣', '*': '*️⃣',
	'!': '❗', '?': '❓',
};
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const defaultURLs = [
  "https://cdn.discordapp.com/embed/avatars/0.png",
  "https://cdn.discordapp.com/embed/avatars/1.png",
  "https://cdn.discordapp.com/embed/avatars/2.png",
  "https://cdn.discordapp.com/embed/avatars/3.png",
  "https://cdn.discordapp.com/embed/avatars/4.png"
];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.on("guildMemberAdd", (member) => {
    if (Date.now() - member.user.createdAt <= 300000) {
        member.ban({ days: 7, reason: 'New account' })
    }
});

client.on("guildMemberAdd", member => {
  if (defaultURLs.includes(member.user.displayAvatarURL)) {
    member.ban({ days: 7, reason: "No Profile Pic" });
  }
});

client.login("Token");
