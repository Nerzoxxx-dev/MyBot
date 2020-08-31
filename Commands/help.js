const {MessageEmbed} = require('discord.js')
const fs = require('fs')
const guildAPI = require('../API/guild/guildAPI.js')

module.exports.run = (client, message, args) => {
var allCommands = []
var infoName = []
var funName = []
var moderationName = []
var developpementName = []
var adminName = []
var utileName = []
var configName = []

const commandFiles = fs.readdirSync('./Commands').filter(f => f.endsWith('.js'))
for(const f of commandFiles){
  const command = require(`../Commands/${f}`)
    if(command.help.aliase !== undefined && command.help.aliase.length > 0){
        newCommand = {
          name: "`" + command.help.name + "`",
          description: command.help.description,
          category: command.help.category,
          aliase: command.help.aliase,
          permissions: command.help.permissions !== undefined ? command.help.permissions : []
        }
      }else{
        newCommand = {
        name: "`" + command.help.name + "`",
        category: command.help.category,
        description: command.help.description,
        aliase: [],
        permissions: command.help.permissions !== undefined ? command.help.permissions : []
      }
    }
    allCommands.push(newCommand)
  }
  allCommands.forEach((command) => {
    if(command.category === 'info'){
      infoName.push(command.name)
    }else if(command.category === 'fun'){
      funName.push(command.name)
    }else if(command.category === 'developpeur'){
      developpementName.push(command.name)
    }else if(command.category === 'moderation'){
      moderationName.push(command.name)
    }else if(command.category === 'administration'){
      adminName.push(command.name)
    }else if(command.category === 'utile'){
      utileName.push(command.name)
    }else if(command.category === 'config'){
      configName.push(command.name)
    }
  })
  var helpEmbed = new MessageEmbed()
  .setTitle('Panneau des commandes')
  .setDescription(`**__Mon prefix__** actuel sur le serveur est ${guildAPI.getPrefix(message.guild.id)}. **Pour executer la commande souhaitée, il suffit de respecter la syntaxe ci-contre ${guildAPI.getPrefix(message.guild.id)}{nom_de_la_commande}**`)
  .setColor(process.env.COLOR)
  .addField(' > :page_facing_up: Informations (' + infoName.length +') :', infoName.length > 0 ? infoName.sort().join(', ') : '``')
  .addField(' > :joy: Fun (' + funName.length + ') :', funName.length > 0 ? funName.sort().join(', '): '``')
<<<<<<< HEAD
  .addField(' > :pushpin: Utile (' + utileName.length +') :', utileName.length > 0 ? utileName.sort().join(', ') : '``')
  .addField(' > :computer: Developeur (' + developpementName.length + '): ', developpementName.length > 0 ? developpementName.sort().join(', ') : '``')
  .addField(' > :police_officer: Modération (' + moderationName.length + ') : ', moderationName.length > 0 ? moderationName.sort().join(', ') : '``')
  .addField(' > :shield: Administration (' + adminName.length + ') :', adminName.length > 0 ? adminName.sort().join(', ') : '``')
  .addField(' > :file_folder: Configuration (' + configName.length + ') :', configName.length > 0 ? configName.sort().join(', ') : '``')
  .addField(' > :newspaper: Besoin de plus d\'informations sur une commande ?', 'Utilisez **' + guildAPI.getPrefix(message.guild.id) + 'help <command>** !')
  .addField(' > :question: Une question ?', 'Discord support : [[Cliquez-ici]](https://discord.gg/Atvfs7)')
  .addField('> :lock: Un problème / bug de commande ?', 'N\'hesitez pas à utiliser la commande **' + guildAPI.getPrefix(message.guild.id) + 'report <command> <problem> !**')
=======
  .addField(' > :pushpin: Utiles (' + utileName.length +') :', utileName.length > 0 ? utileName.sort().join(', ') : '``')
  .addField(' > :computer: Developeurs (' + developpementName.length + '): ', developpementName.length > 0 ? developpementName.sort().join(', ') : '``')
  .addField(' > :police_officer: Modération (' + moderationName.length + ') : ', moderationName.length > 0 ? moderationName.sort().join(', ') : '``')
  .addField(' > :shield: Administration (' + adminName.length + ') :', adminName.length > 0 ? adminName.sort().join(', ') : '``')
  .addField(' > :file_folder: Configuration (' + configName.length + ') :', configName.length > 0 ? configName.sort().join(', ') : '``')
  .addField(' > :question: Une question ?', 'Discord support : [[Cliquez-ici]](https://discord.gg/Atvfs7)')
>>>>>>> 19c3ac7d3c08fcec957f54b7978239478e669af2
  .setFooter('Demandé par ' + message.author.tag);
  if(!args[0]) return message.channel.send(helpEmbed)
  if(args[0] === 'help') return message.channel.send(helpEmbed)
  
var noSearch = true
for(c of allCommands){
    if(args[0] === c.name.replace("`", "").replace("`", "") || c.aliase.indexOf(args[0]) === 0){
       var helpCommandEmbed = new MessageEmbed()
       .setTitle('Informations pour la commande ' + c.name)
       .setDescription('Description de la commande : ' + c.description)
       .setColor(process.env.COLOR)
      .addField(' > Catégorie :', c.category)
      .addField(' > Aliase(s) :', c.aliase.length > 0 ? c.aliase.slice(', ') : 'Aucun')
      .addField(' > Permissions requises : ', c.permissions.length > 0 ? c.permissions.slice(', ') : 'Aucune')
      .setFooter('Demandé par ' + message.author.tag);
      message.channel.send(helpCommandEmbed)
      noSearch = false
      break
    }
  }
  if(noSearch){
    message.channel.send(helpEmbed)
  }
}

module.exports.help = {
  name: 'help',
  description: 'Affiche la liste des commandes disponibles',
  category: 'help',
  aliase: ['test']
}
