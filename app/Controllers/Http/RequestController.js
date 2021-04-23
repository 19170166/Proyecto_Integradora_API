'use strict'
var llenar = false
var valorpeticion = 0
var regar = false
class RequestController {

    async postPeticionLlenarP({request,response}) {
        valorpeticion = request.only(['valor'])
        llenar = true
        response.json({
            data: valorpeticion.valor,
            llenar:llenar,
            status: true
        })

    }

    async checkPeticionLlenarP({request, response}){
        response.json({
            data:valorpeticion.valor,
            llenar:llenar,
            status:true
        })

    }

    async cancelPeticionLlenarP({request, response}){
        llenar = false
        response.json({
            data:valorpeticion.valor,
            llenar:llenar,
            status:false
        })
    }

    async postPeticionHumedad({request, response}){
        regar = true
        response.json({
            data:regar,
            status:true
        })
    }

    async cancelarPeticionHumedad({request, response}){
        regar = false
        response.json({
            data:regar,
            status:true
        })
    }

    async checkPeticionRegado({request, response}){
        response.json({
            data:regar,
            status:true
        })
    }
}

module.exports = RequestController
