const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const ee = require("../../botconfig/embed.json");
const client = new Discord.Client();
const disbut = require("discord-buttons");

const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports = {
  name: "help",
  cooldown: 5,
  aliases: ["commands", "auda", "h"],

  run: async (bot, message, args) => { //async
    //--------------------------------------S T A R T--------------------------------------//

    message.react('887650847327158343');


    const embed = new Discord.MessageEmbed()
      .setTitle(`Help options `)
      .setFooter(ee.footertext, ee.footericon)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(`\n- Home Page\n- Commands\n - Features\n - About Me\n __My status__\n:file_folder: on **${client.guilds.cache.size} Guilds\n`)
      .setColor(`#0x2F3136`)

    const embed2 = new Discord.MessageEmbed()
      .setTitle(`Help Commands`)
      .setFooter(ee.footertext, ee.footericon)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(`**__Here Are My Commands:__**\n\`setup,\` \`transcript,\` \`rename,\` \`remove,\` \`ping,\` \`open,\` \`close\``)
      .setColor(`#0x2F3136`)

    const embed3 = new Discord.MessageEmbed()
      .setTitle(`My Features`)
      .setFooter(ee.footertext, ee.footericon)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(`**Hello, Im {client.username} ! You May Ask, What is diffent from me than the regular Multi-ticket system**? Well i have, Better emojis, Better buttons, And Lots of More Features!`)
      .setColor(`#0x2F3136`)

    // Last embed
    const embed4 = new Discord.MessageEmbed()
      .setTitle(`About Me`)
      .setFooter(ee.footertext, ee.footericon)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(`**I was made as a ticket bot to see if i could actually create a ticket bot with buttons! And since my code was a success, i started actually working on making this a good bot! I first started with the worst looking embeds on this ticket bot and ended with one of the best!**\nThank You for reading\n~ Ticket Bot\n\n**I was Made by, \`smiteness#0001 \`!\n\nJoin my support [server](https://discord.gg/E6XMfqFu8F)**`)
      .setColor(`#0x2F3136`)

    //-----------------------------OPTIONS----------------------
    //examples .setLabel('Put What You Want to put')
    //.setValue('')
    //.setDescription('put what u wantnto put')

    let option1 = new MessageMenuOption()
      .setLabel('Home Page')
      .setValue('option1')
      .setEmoji("🏠")
      .setDescription('View All Commands')

    let option2 = new MessageMenuOption()
      .setLabel('Commands')
      .setValue('option2')
      .setEmoji("🎫")
      .setDescription('View  Ticket Commands')

    let option3 = new MessageMenuOption()
      .setLabel('Features')
      .setValue('option3')
      .setEmoji("❓")
      .setDescription('View My  Features')

    let option4 = new MessageMenuOption()
      .setLabel('About Me')
      .setValue('option4')
      .setEmoji("📔")
      .setDescription('View My About')


    let select = new MessageMenu()
      .setID('selector')
      .setPlaceholder('Ticket Bot Menu')
      .setMaxValues(1)
      .setMinValues(1)
      .addOptions(option1, option2, option3, option4)

    const Sendmenu = await message.channel.send(embed, select);

    let collector = Sendmenu.createMenuCollector(b => b, { time: 60000 });

    collector.on("collect", (b) => {

      if (b.clicker.user.id !== message.author.id)
        return b.reply.send(`❌ **Only <@${message.author.id}> Is Allowed To React!**\n**Tip**: \`To Use This Command, Type the help command\``, true)


      if (b.values[0] == "option1") {
        Sendmenu.edit(embed, select)
      }

      if (b.values[0] == "option2") {
        Sendmenu.edit(embed2, select)
      }

      if (b.values[0] == "option3") {
        Sendmenu.edit(embed3, select)
      }

      if (b.values[0] == "option4") {
        Sendmenu.edit(embed4, select)
      }
      b.reply.defer();



    })

    collector.on("end", (b) => {
      Sendmenu.edit(new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("This help menu is expired! Please retype the \`Help Command\`")
        .setFooter("ee.footertext, ee.footericon"))
    })

  }
}

/**********************************************************
 * @INFO
 * Bot Coded by Piyushᵈᵉᵛ#6397  | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Work for  Development | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Please Mention Us  Development, When Using This Code!
 * @INFO
 *********************************************************/