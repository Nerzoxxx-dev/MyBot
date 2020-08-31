const fs = require('fs')
const penisfile = require('../../guild/fun/peniscalc.json')

module.exports = class FunAPI{
    static hasOwnDataPenis(id){
        if(penisfile[id]){
            return true
        }else{
            return false
        }
    }
    static getPenisLength(id){
        return penisfile[id].longueur
    }
    static setPenisLength(id, amount){
        penisfile[id] = {
            longueur: amount,
        }

        fs.writeFileSync('./guild/fun/peniscalc.json', JSON.stringify(penisfile))
    }
}