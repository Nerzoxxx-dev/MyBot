const {MessageEmbed} = require('discord.js')
const fs = require('fs')

module.exports.run = (client, message, args) => {
  if(!args[0]) return message.channel.send('**:x: Usage: ' + require('../API/guild/guildAPI.js').getPrefix(message.guild.id) + 'report <command> <bug>**')
  var bug = args.join(' ').slice(args[0].length + 1)
  if(!bug) return message.channel.send('**:x: Usage: /report <command> <bug>**')
  var commandFiles = fs.readdirSync('./Commands').filter(f => f.endsWith('.js'))
  
  var isSearch = false
  commandFiles.forEach(f => {
    var commandname = f.split('.')[0]
    if(args[0] === commandname) return isSearch = true
})
  
  if(!isSearch) return message.channel.send('**:x: La commande n\'a pas été trouvée. Si vous utilisez l\'aliase d\'une commande, veuillez utiliser le vrai nom de la commande (se réferer au ' + require('../API/guild/guildAPI.js').getPrefix(message.guild.id) + 'help <aliase>).**')
  var channel = client.channels.cache.get('749959576052563978')
  var reportEmbed = new MessageEmbed()
  .setTitle('Un report a été effectué.')
  .setColor(process.env.COLOR)
  .addField('Auteur du report : ', message.author.tag)
  .addField('Commande où le bug est survenu :', args[0])
  .addField('Bug survenu : ', bug)
  .setFooter('Demandé par ' + message.author.tag);
  
  message.channel.send(reportEmbed)
  channel.send(reportEmbed)
}

module.exports.help = {
  name: 'report',
  description: 'Envoie un rapport avec la commande demandée et le bug trouvé.',
  category: 'utile',
  aliase: [],
  permissions: []
}