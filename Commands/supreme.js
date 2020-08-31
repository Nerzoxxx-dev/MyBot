const {MessageEmbed} = require('discord.js')

module.exports.run = (client, message, args) => {
  if(!args[0]) return message.channel.send('**:x: Usage: ' + require('../API/guild/guildAPI.js').getPrefix(message.guild.id) + 'supreme <text>**')
  
  message.channel.send(new MessageEmbed()
  .setTitle('Image supreme')
  .setDescription(' > Voici l\'image demandée :')
  .setColor(process.env.COLOR)
  .setImage('https://api.alexflipnote.dev/supreme?text=' + args.join('%20').slice(0))
  )
  
}

module.exports.help = {
  name: 'supreme',
  description: 'Affiche une image suprème avec les arguments demandés.',
  category: 'fun',
  aliase: [],
  permissions: []
}