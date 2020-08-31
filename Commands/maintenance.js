const Discord = require('discord.js')
const clientAPI = require('../API/client/clientAPI.js')

module.exports.run = (client, message, args) => {
    if(!process.env.TEAM_ID.includes(message.author.id)) return message.channel.send('**:x: Seuls les developpeurs du bot sont autorisés à utiliser cette commande.**')

<<<<<<< HEAD
    if(!args[0]) return message.channel.send('**:x: Usage: '+ require('../API/guild/guildAPI.js').getPrefix(message.guild.id) +'maintenance <enable/disable> [raison] (si vous activez une maintenance, la raison est nécéssaire).**')
=======
    if(!args[0]) return message.channel.send('**:x: Usage: /maintenance <enable/disable> [raison] (si vous activez une maintenance, la raison est nécéssaire).**')
>>>>>>> 19c3ac7d3c08fcec957f54b7978239478e669af2

    if(args[0] === 'enable'){
        if(clientAPI.isMaintenance()) return message.channel.send('**:x: Le mode maintenance est déjà activé.**')
        var raison = args.join(' ').slice(args[0].length + 1)
        if(!raison) return message.channel.send('**:x: Veuillez préciser une raison pour activer une maintenance.**')
        clientAPI.activeMaintenance(raison)
        message.channel.send(':white_check_mark: Le mode maintenance a bien été activé pour la raison ' + raison + '.')
    }else if(args[0] === 'disable'){
        if(!clientAPI.isMaintenance()) return message.channel.send('**:x: Le mode maintenance n\'est pas activé.**')
        clientAPI.disableMaintenance()
        message.channel.send(':white_check_mark: Le mode maintenance a bien été désactivé.')
    }else{
        return message.channel.send('**:x: Usage: /maintenance <enable/disable> [raison] (si vous activez une maintenance, la raison est nécéssaire).**')
    }
}

module.exports.help = {
    name: 'maintenance',
<<<<<<< HEAD
    description: 'Active ou désactive le mode maintenance.',
=======
    description: 'Active ou désactive une maintenance.',
>>>>>>> 19c3ac7d3c08fcec957f54b7978239478e669af2
    category: 'developpeur',
    permissions: ['DEVELOPPERS']
}
