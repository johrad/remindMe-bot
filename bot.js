// DOCUMENTATION FOR discord.js = https://discord.js.org/#/docs/main/stable/general/welcome 

// Require config file
const config = require('./config.json');

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();




// Logging in to discord
client.on('ready', () => {
  console.log('');
});


// Create an event listener for messages
client.on('message', message => {

  if (message.author.bot == true) {
    // console.log("I aint doing shit cuz u a bot");
    return;
  }

  // *TODO* 
  // There's some issue with this statement pls fix thanks

  if (message.content.startsWith(config.prefix + "hello")) {
    message.channel.send(":wave:");
  }


});

client.login(config.token);