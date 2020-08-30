const funapi = require('../API/fun/FunAPI.js')

module.exports.run = (client, message, args) => {
    var mention = message.mentions.users.first()

    if(mention && mention != message.author) {
        if(funapi.hasOwnDataPenis(mention.id)){
            message.channel.send('Le penis de ' + mention.tag.replace('#' + mention.discriminator, '') + ' mesure ' + funapi.getPenisLength(mention.id) + 'cm ! 8' + "=".repeat(Math.round(funapi.getPenisLength(mention.id) / 2)) + "D")
        }else{
            var random = Math.floor(Math.random() * 25)
            funapi.setPenisLength(mention.id, random)
            message.channel.send('Le penis de ' + mention.tagmention.tag.replace('#' + mention.discriminator, '') + ' mesure ' + funapi.getPenisLength(mention.id) + 'cm ! 8' + "=".repeat(Math.round(funapi.getPenisLength(mention.id) / 2)) + "D")
        }
    }else{
        if(funapi.hasOwnDataPenis(message.author.id)){
            message.channel.send('Vôtre penis mesure ' + funapi.getPenisLength(message.author.id) + 'cm ! 8' + "=".repeat(Math.round(funapi.getPenisLength(message.author.id) / 2)) + "D")
        }else{
            var random = Math.floor(Math.random() * 25)
            funapi.setPenisLength(message.author.id, random)
            message.channel.send('Vôtre penis mesure ' + funapi.getPenisLength(message.author.id) + 'cm ! 8' + "=".repeat(Math.round(funapi.getPenisLength(message.author.id) / 2)) + "D")
        }
    }
}

module.exports.help = {
    name: 'peniscalc',
    description: 'Affiche la "taille" du penis de quelqu\'un',
    category: 'fun',
    aliase: ['penis']
}