'use strict'
var lastPet = 0
const regar = false
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
        }

    }

    async checkPeticionLlenarP({request, response}){
        response.json({
            data:lastPet,
            status:true
        })

    }

    async postPeticionHumedad({request, response}){
        regar = true
    }

    async cancelarPeticionHumedad({request, response}){
        regar = false
    }
}

module.exports = RequestController
