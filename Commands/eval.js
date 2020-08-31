const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
    var motsinterdit = ['token', 'destroy()', 'exit', 'child_process']
    if(!process.env.TEAM_ID.includes(message.author.id)) return message.channel.send('**:x: Seuls mes developpeurs sont autorisés à utiliser cette commande.**')
    
    toEval = args.join(' ').slice(0)
    var usageembed = new MessageEmbed()
    .setTitle(":x: Usage de la commande eval")
    .setDescription("Voici la syntaxe à utiliser pour la commande demandée...")
    .setColor(process.env.COLOR)
    .addField(' > Syntaxe : ', require('../API/guild/guildAPI.js').getPrefix(message.guild.id) + 'eval <code>')
    .setFooter('Demandé par ' + message.author.tag)
    if(!toEval) return message.channel.send(usageembed)
    for(var mot of motsinterdit){
      if(message.content.toLowerCase().includes(mot)) return message.channel.send(':x: ERREUR `undefined`')
    }
    try{
      var evaluated = eval(toEval)
      message.channel.send('```' + evaluated + '```')
    }catch(e){
      message.channel.send(':x: **ERREUR** `' + e + '`')
    }
  }
<<<<<<< HEAD
  module.exports.help = {
    name: 'eval',
    description: 'Evalue un code donné en argument.',
    category: 'developpeur',
    aliase: [],
    permissions: ['DEVELOPPERS']
}
=======
  try{
    var evaluated = eval(toEval)
    message.channel.send('```' + evaluated + '```')
  }catch(e){
    message.channel.send(':x: **ERREUR** `' + e + '`')
  }
}

module.exports.help = {
  name: 'eval',
  description: 'Evalue un code donné en argument.',
  category: 'developpeur',
  aliase: [],
  permissions: ['DEVELOPPERS']
}
>>>>>>> 19c3ac7d3c08fcec957f54b7978239478e669af2
