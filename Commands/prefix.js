const {MessageEmbed} = require('discord.js')
const guildFile = require('../guild.json')

module.exports.run = (client, message, args) => {
  message.channel.send('**__Mon prefix__ actuel sur sur ce serveur est ``' + guildFile[message.guild.id].prefix + '``**')
}
module.exports.help = {
  name: 'prefix',
  description: 'Affiche le prefix actuellement utilisé sur ce serveur (prefix de Kagura)',
  category: "info",
  aliase: ['getprefix']
}