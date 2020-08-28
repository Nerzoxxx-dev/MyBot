const { Client, Collection } = require('discord.js')
const client = new Client()
const fs = require('fs')
require('dotenv').config()

const prefix = '/'
client.commands = new Collection()

const commandFiles = fs.readdirSync('./Commands').filter(f => f.endsWith('.js'))


for(const f of commandFiles){
  const command = require(`./Commands/${f}`)
  client.commands.set(command.help.name, command)
  if(command.help.aliase){
    command.help.aliase.forEach((a) => {
      client.commands.set(a, command)
    })
  }
  if(commandFiles.length < 0){
    console.log("Aucune commande chargée.")
  }else{
    console.log(f + " commande chargée.")
  }
}

exports.memberCount = function(){
  var count = 0
  client.guilds.cache.map((g) => {
    count = parseInt(count) + parseInt(g.memberCount)
  })
  return count
}
exports.serverCount = function(){
  var count = 0
  count = parseInt(count) + parseInt(client.guilds.cache.size)
  return count
}

client.on('ready', function(){
  client.user.setActivity(exports.memberCount() + " membres sur " + exports.serverCount() + " serveurs", {type: 'WATCHING'})
})
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  
  const command = args.shift().toLowerCase()
  
  if(!client.commands.has(command)) return;
     client.commands.get(command).run(client, message, args)
})

client.login(process.env.TOKEN)
