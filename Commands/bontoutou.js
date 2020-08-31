const {MessageEmbed} = require('discord.js')

module.exports.run = (client, message, args) => {
  message.channel.send('soon')
  
}

module.exports.help = {
  name: 'bontoutou',
  description: 'Affiche une image bontoutou avec les arguments demandés.',
  category: 'fun',
  aliase: ['bon'],
  permissions: []
}