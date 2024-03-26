const chalk = require('chalk');
const figlet = require("figlet");

// Set the client user's presence

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("Ticket Tool")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Is Ready"));

}


/**********************************************************
 * @INFO
 * Bot Coded byPiyushᵈᵉᵛ#6397  | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Work for  Development | 903492864535838740
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 *********************************************************/