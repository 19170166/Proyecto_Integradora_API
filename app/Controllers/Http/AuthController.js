'use strict'

const User = use('App/Models/User')
class AuthController {
   async Login ({request, response, auth})
   {
       //Campos requeridos              //Atrapar los datos
       const {email, password} = request.only(['email','password'])
       //Generar token del Usuario
       const token = await auth.attempt(email, password)
       const user = await User.findBy('email',email)
       response.json({
           token: token,
           //user: user.Nombre
       })
   }
}
module.exports = AuthController
