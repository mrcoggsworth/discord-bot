const Discord = require('discord.js');
const fs = require('fs');

const authParams = {
  prefix: '!',
  token: process.env.DiscordToken
}

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);

}

// connect bot to discord and listen for request
client.once('ready', () => {
  console.log('Ready!')
});

// testing ground for initial message command
client.on('message', async (message) => {
  if (!message.content.startsWith(`${authParams.prefix}`) || message.author.bot) return;
  
  args = message.content.slice(authParams.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }

});

// Welcome members to the server
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');

    if (!channel) return;

    channel.send(`Welcome to the server, ${member}`);
});

// login to the server
client.login(authParams.token);

