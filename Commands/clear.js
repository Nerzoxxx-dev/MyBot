const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
  if(!message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES')) return message.channel.send('**:x: Vous n\'avez pas la permission d\'utiliser cette commande.**')
  if(!args[0]) return message.channel.send('**:x: Usage: ' + require('../API/guild/guildAPI.js').getPrefix(message.guild.id) +'clear <amount>**')
  if(isNaN(args[0])) return message.channel.send('**:x: Le premier argument doit être un nombre.**')
  if(args[0] > 100) return message.channel.send('**:x: Je ne peux que supprimer 100 messages à la fois.**')
  
  message.delete()
  message.channel.bulkDelete(args[0])
  args[0] > 1 ? message.channel.send(':white_check_mark: ' + args[0] + ' messages ont été supprimés.') : message.channel.send(':white_check_mark: ' + args[0] + ' message a été supprimé.')
}
module.exports.help = {
  name: 'clear',
  description: 'Supprime un nombre de message demandé.',
  category: 'moderation',
  aliase: [],
  permissions: ['MANAGE_MESSAGES']
}