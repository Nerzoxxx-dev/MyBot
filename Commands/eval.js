const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
  var motsinterdit = ['token']
  if(!process.env.TEAM_ID.includes(message.author.id)) return message.channel.send(':x: Vous ne faites pas parti de la team de developpement de Kagura.')
  
  toEval = args.join(' ').slice(0)
  var usageembed = new MessageEmbed()
  .setTitle(":x: Usage de la commande eval")
  .setDescription("Voici la syntaxe à utiliser pour la commande demandée...")
  .setColor(process.env.COLOR)
  .addField(' > Syntaxe : ', '/eval <code>')
  .setFooter('Demandé par ' + message.author.tag)
  if(!toEval) return message.channel.send(usageembed)
  for(var mot of motsinterdit){
    if(message.content.includes(mot)) return message.channel.send(':x: ERREUR `undefined`')
  }
  try{
    var evaluated = eval(toEval)
    var evalEmbed = new MessageEmbed()
    .setTitle(':white_check_mark: Evaluation réussie !')
    .setDescription('Le code à evaluer fonctionne ! Voici la réponse du serveur.')
    .setColor('#27AE60')
    .addField('Code à evaluer : ', toEval)
    .addField('Réponse du serveur : ', evaluated)
    .setFooter('Demandé par ' + message.author.tag)
    message.channel.send(evalEmbed)
  }catch(e){
    message.channel.send(':x: ERREUR `' + e + '`')
  }
}

module.exports.help = {
  name: 'eval',
  description: 'Evalue un code donné en argument.',
  category: 'developpeur',
  aliase: []
}