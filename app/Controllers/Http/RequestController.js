'use strict'
var lastPet = 0
var bandera = false
class RequestController {

    async postPeticionLlenarP({request,response}) {
        const newPet = request.only(['valor'])
        
        if(newPet.valor != lastPet){
            lastPet = newPet.valor
            response.json({
                last: lastPet,
                data: newPet.valor,
                status: true
            })
        }else{
            response.json({
                data:null,
                status: false
            })
        }

    }

    async checkPeticionLlenarP({request, response}){
        response.json({
            data:lastPet,
            status:true
        })

    }
}

module.exports = RequestController
