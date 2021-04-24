'use strict'
const User = use('App/Models/User')
//const mongoose = use('Mongoose')

class UserController {
    async store({request, response})
    {
        //Obtener datos que llegaran del cliente (Insomnia)
        const userData = request.only(['Nombre','email','password'])
        //Crear el usuario nuevo
        
        if(await User.findBy('email',userData.email)){
            return response.created({
                status: false
            })
        }else{
            const user = await User.create(userData)
            return response.created({
                status: true
            })
        }
        //const mongoosed = await mongoose.create(userData)
        //Retorna en caso de que el usuario sea creado satisfactoriamente
    }
}
module.exports = UserController
