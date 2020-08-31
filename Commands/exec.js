const { exec } = require('child_process')

module.exports.run = (client, message, args) => {
  if(!process.env.TEAM_ID.includes(message.author.id)) return message.channel.send('**:x: Seuls mes developpeurs sont autorisés à utiliser cette commande.**')
  
  var executeargs = args.join(' ').slice(0)
  
  if(!executeargs) return message.channel.send('**:x: Usage: ' + require('../API/guild/guildAPI.js').getPrefix(message.guild.id) + 'exec <toExec>**')
  
  exec(executeargs, (err, out) => {
    if(err){
      return message.channel.send('**:x: Error** ``' + err + '``')
    }else{
      message.channel.send('```' + out + '```')
    }
  })
}
module.exports.help = {
  name: 'exec',
  description: 'Execute une commande en console depuis les arguments.',
  category: 'developpeur',
  aliase: ['execute'],
  permissions: ['DEVELOPPERS']
}