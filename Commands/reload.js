const {MessageEmbed} = require('discord.js')

module.exports.run = (client, message, args) => {
  if(!process.env.TEAM_ID.includes(message.author.id)) return message.channel.send('**:x: Seuls mes developpeurs sont autorisés à utiliser cette commande.**')
  
  var rlembed = new MessageEmbed()
  .setTitle('Redemarrage en cours...');
  
  message.channel.send(rlembed).then(m => process.exit(1))
}

module.exports.help = {
  name: 'reload',
  description: 'Redemarre le bot.',
  category: 'developpeur',
  aliase: ['rl', 'restart'],
  permissions: ['DEVELOPPERS']
}
