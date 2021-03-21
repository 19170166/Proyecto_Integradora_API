'use strict'
const User = use('App/Models/User')
class UserController {
    async store({request, response})
    {
        //Obtener datos que llegaran del cliente (Insomnia)
        const userData = request.only(['Nombre','email','password'])
        //Crear el usuario nuevo
        const user = await User.create(userData)
        //Retorna en caso de que el usuario sea creado satisfactoriamente
        return response.created({
            status: true,
            data: user
        })
    }
}
module.exports = UserController
