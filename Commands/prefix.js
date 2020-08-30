const {MessageEmbed} = require('discord.js')
const guildAPI = require('../API/guild/guildAPI.js')

module.exports.run = (client, message, args) => {
  message.channel.send('**__Mon prefix__ actuel sur sur ce serveur est ``' + guildAPI.getPrefix(message.guild.id) + '``**')
}
module.exports.help = {
  name: 'prefix',
  description: 'Affiche le prefix actuellement utilisé sur ce serveur (prefix de Kagura)',
  category: "info",
  aliase: ['getprefix']
}