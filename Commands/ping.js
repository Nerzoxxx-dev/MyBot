const {MessageEmbed} = require('discord.js')

module.exports.run = (client, message, args) => {
  var embed = new MessageEmbed()
  .setTitle('Ping ! :ping_pong:')
  .setDescription("Combien ai-je de ping ?")
  .setColor(process.env.COLOR)
  .addField(" > Mon ping : ", client.ws.ping + " ms !")
  .setFooter("Demandé par " + message.author.tag);
  
  message.channel.send(embed)
}
module.exports.help = {
  name: 'ping',
  description: 'Affiche le ping du bot',
  category: 'info'
}