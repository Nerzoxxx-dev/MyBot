const {MessageEmbed} = require('discord.js')
const fs = require('fs')
const guildAPI = require('../API/guild/guildAPI.js')

module.exports.run = (client, message, args) => {
  if(!message.channel.permissionsFor(message.author).has('ADMINISTRATOR')) return message.channel.send('**:x: Vous n\'avez pas les permissions requises (ADMINISTRATOR)')
  if(!args[0]) return message.channel.send('**:x: Usage : ' + require('../API/guild/guildAPI.js').getPrefix(message.guild.id) + 'setprefix <newPrefix>**')
  if(!isNaN(args[0])) return message.channel.send('**:x: Vous ne pouvez pas indiquer un nombre comme prefix.**')
  if(args[0].length > 5) return message.channel.send('**:x: Ce prefix est trop long (max. 5 caractères).**')
  
  guildAPI.setPrefix(message.guild.id, args[0])

  message.channel.send(':white_check_mark: Nouveau prefix appliqué au serveur !')
}

module.exports.help = {
  name: 'setprefix',
  description: 'Selectionner le nouveau prefix du serveur.',
  category: 'config',
  aliase: ['newprefix'],
  permissions: ['ADMINISTRATOR']
}