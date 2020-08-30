const Discord = require('discord.js')
const clientAPI = require('../API/client/clientAPI.js')

module.exports.run = (client, message, args) => {
    if(!process.env.TEAM_ID.includes(message.author.id)) return message.channel.send('**:x: Seuls les developpeurs du bot sont autorisés à utiliser cette commande.**')

    if(!args[0]) return message.channel.send('**:x: Usage: /maintenance <enable/disable> [raison] (si vous activez une maintenance, la raison est nécéssaire).**')

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
    description: 'Active ou désactive une maintenance.',
    category: 'developpeur',
    permissions: 'DEVELOPPERS'
}