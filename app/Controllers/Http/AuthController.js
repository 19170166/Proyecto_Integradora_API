'use strict'

class AuthController {
   async Login ({request, response, auth})
   {
       //Campos requeridos              //Atrapar los datos
       const {email, password} = request.only(['email','password'])
       //Generar token del Usuario
       const token = await auth.attempt(email, password)
       return response.ok(token)
   }
}
module.exports = AuthController
