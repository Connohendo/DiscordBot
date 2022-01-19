// Grabbing discxord libraries
const Discord = require('discord.js');

// creating discord bot client
const client = new Discord.Client();

// creating command prefix
const prefix = '!';

//require fs to access other java script files
const fs = require('fs');

// creating a new file collection
client.commands = new Discord.Collection();

// read files from commands folder and filter for only js files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// loop through files to grab the correct file
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
});

//checking for prefix
client.on('message', message =>{
    // if message doesnt have prefix or is by the bot ignore
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    // splice the message to check for prefix
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    // ping command calling the file and executing it
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    // confidence boost command
    else if(command === 'confidenceboost'){
        client.commands.get('confidenceboost').execute(message, args);
    }
    // command to get da bois
    else if(command === 'getdabois'){
        client.commands.get('getdabois').execute(message, args);
    }
})


// LAST LINE; logging in with token
client.login('OTMyNzE5NTY3MzcxOTI3NjMy.YeXEyQ.xkfNhE191Hv0gZl1dJ_FT3oCqxA');