const {MessageEmbed} = require('discord.js')
const fs = require('fs')

module.exports.run = (client, message, args) => {
var allCommands = []
var infoName = []
var funName = []
var moderationName = []
var developpementName = []
var adminName = []
var utileName = []

const commandFiles = fs.readdirSync('./Commands').filter(f => f.endsWith('.js'))
for(const f of commandFiles){
  const command = require(`../Commands/${f}`)
    if(command.help.aliase !== undefined && command.help.aliase.length > 0){
        newCommand = {
          name: "`" + command.help.name + "`",
          description: command.help.description,
          category: command.help.category,
          aliase: command.help.aliase
        }
      }else{
        newCommand = {
        name: "`" + command.help.name + "`",
        category: command.help.category,
        description: command.help.description,
        aliase: []
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
    }
  })
  var helpEmbed = new MessageEmbed()
  .setTitle('Panneau des commandes')
  .setDescription(`**__Mon prefix__** est /. **Pour executer la commande souhaitée, il suffit de respecter la syntaxe ci-contre /{nom_de_la_commande}`)
  .setColor(process.env.COLOR)
  .addField('Commande(s) d\'information :', infoName.length > 0 ? infoName.splice(infoName.indexOf('`help`', 6)).sort().join(', ') : '``')
  .addField('Commande(s) fun :', funName.length > 0 ? funName.sort().join(', '): '``')
  .addField('Commande(s) utiles :', utileName.length > 0 ? utileName.sort().join(', ') : '``')
  .addField('Commande(s) pour mes developpeurs : ', developpementName.length > 0 ? developpementName.sort().join(', ') : '``')
  .addField('Commande(s) de modération : ', moderationName.length > 0 ? moderationName.sort().join(', ') : '``')
  .addField('Commande(s) administratives :', adminName.length > 0 ? adminName.sort().join(', ') : '``')
  .setFooter('Demandé par ' + message.author.tag);
  if(!args[0]) return message.channel.send(helpEmbed)
  
var noSearch = true
for(c of allCommands){
    if((args[0] === c.name.replace("`", "").replace("`", "") || c.aliase.indexOf(args[0]) !== -1) && !args[0] === 'help'){
       var helpCommandEmbed = new MessageEmbed()
       .setTitle('Informations pour la commande ' + args[0])
       .setDescription('Description de la commande : ' + c.description)
       .setColor(process.env.COLOR)
      .addField(' > Catégorie :', c.category)
      .addField(' > Aliase(s) :', c.aliase.length > 0 ? c.aliase.slice(', ') : 'Aucun')
      .setFooter('Demandé par ' + message.author.tag);
      message.channel.send(helpCommandEmbed)
      noSearch = false
    }
  }
  if(noSearch){
    message.channel.send(helpEmbed)
  }
}
exports.isAliase = function(check, name, allCommands){
  allCommands.forEach((c) => {
    if(c.name === name){
      c.aliase.forEach((a) => {
        return check === a ? true : false
      })
    }
  })
}

module.exports.help = {
  name: 'help',
  description: 'Affiche la liste des commandes disponibles',
  category: 'info',
  aliase: []
}
