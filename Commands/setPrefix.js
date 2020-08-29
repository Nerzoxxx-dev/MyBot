const {MessageEmbed} = require('discord.js')
const fs = require('fs')
const guildFile = require('../guild.json')

module.exports.run = (client, message, args) => {
  if(!message.channel.permissionsFor(message.author).has('ADMINISTRATOR')) return message.channel.send('**:x: Vous n\'avez pas les permissions requises (ADMINISTRATOR)')
  if(!args[0]) return message.channel.send('**:x: Usage : /setprefix <newPrefix>**')
  if(!isNaN(args[0])) return message.channel.send('**:x: Vous ne pouvez pas indiquer un nombre comme prefix.**')
  
  guildFile[message.guild.id].prefix = args[0]
  
  fs.writeFileSync('./guild.json', JSON.stringify(guildFile))
  message.channel.send(':white_check_mark: Nouveau prefix appliqué au serveur !')
}

module.exports.help = {
  name: 'setprefix',
  description: 'Selectionner le nouveau prefix du serveur.',
  category: 'config',
  aliase: ['newprefix'],
  permissions: ['ADMINISTRATOR']
}