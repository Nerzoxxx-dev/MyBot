const { Client, Collection } = require('discord.js')
const client = new Client()
const fs = require('fs')
const clientAPI = require('./API/client/clientAPI.js')
const guildAPI = require('./API/guild/guildAPI.js')
require('dotenv').config()

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

client.on('ready', function(){
  setInterval(() => {
    client.user.setActivity(guildAPI.membersCount(client) + " membres sur " + guildAPI.guildCount(client) + " serveurs", {type: "WATCHING"})
  }, 5000)
})

client.on('guildCreate', (guild) => {
    if(!guildAPI.hasOwnData(guild.id)){
        guildAPI.setConfig(guild.id)
    }  
})

client.on('message', message => {

  if(!message.content.startsWith(guildAPI.getPrefix(message.guild.id)) || message.author.bot) return;

  if(clientAPI.isMaintenance() && !process.env.TEAM_ID.includes(message.author.id)) return message.channel.send('**:x: Le bot est en maintenance pour la raison ' + clientAPI.getRaisonMaintenance() + ', désolé de la gêne occasionnée.**')
  
  if(!message.channel.permissionsFor(client.user).has('SEND_MESSAGE')) return;
  
  const args = message.content.slice(guildAPI.getPrefix(message.guild.id).length).trim().split(/ +/g)
  
  const command = args.shift().toLowerCase()
  
  if(!client.commands.has(command)) return;
     client.commands.get(command).run(client, message, args)
})

client.login(process.env.TOKEN)
