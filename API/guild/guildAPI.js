const fs = require('fs')
<<<<<<< HEAD
const prefix = '/'
=======
>>>>>>> 19c3ac7d3c08fcec957f54b7978239478e669af2
const guildfile = require('../../guild/config/guild.json')

module.exports = class guildAPI {
    static membersCount(client){
        var count = 0
        client.guilds.cache.map((g) => {
            count = parseInt(count) + parseInt(g.memberCount)
        })
        return count
    }
    static guildCount(client){
        var count = 0
        count = parseInt(count) + parseInt(client.guilds.cache.size)
        return count
    }
    static hasOwnData(id){
        if(guildfile[id]){
            return true
          }else{
            return false
          }
    }
    static setConfig(id){
<<<<<<< HEAD
        guildfile[id] = {
=======
        guildfile[guild.id] = {
>>>>>>> 19c3ac7d3c08fcec957f54b7978239478e669af2
            prefix: prefix
          }
          fs.writeFileSync('./guild/config/guild.json', JSON.stringify(guildfile))
    }
    static getPrefix(id){
        return guildfile[id].prefix
    }
    static setPrefix(id, newPrefix){
        guildfile[id].prefix = newPrefix
        fs.writeFileSync('./guild/config/guild.json', JSON.stringify(guildfile))
    }
}