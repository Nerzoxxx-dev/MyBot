const fs = require('fs')
const maintenancefile = require('../../maintenance/maintenance.json')

module.exports = class clientAPI {
    static isMaintenance(){
        if(maintenancefile['maintenance'].enable === true){
            return true
        }else{
            return false
        }
    }
    static activeMaintenance(raison){
        maintenancefile['maintenance'].enable = true
        maintenancefile['maintenance'].raison = raison

        fs.writeFileSync('./maintenance/maintenance.json', JSON.stringify(maintenancefile))
    }
    static disableMaintenance(){
        maintenancefile['maintenance'].enable = false
        maintenancefile['maintenance'].raison = ''

        fs.writeFileSync('./maintenance/maintenance.json', JSON.stringify(maintenancefile))
    }
    static getRaisonMaintenance(){
        return maintenancefile['maintenance'].enable === true ? maintenancefile['maintenance'].raison : undefined
    }
}