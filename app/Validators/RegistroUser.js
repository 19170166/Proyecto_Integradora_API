'use strict'
const {formatters} = use('Validator')
class RegistroUser {
  get rules () {
    return {
      //Reglas de validaciones
    email: 'required|unique',
    password: 'required'
    }
  }
  //Método para validar campos
  get validateAll(){
    return true
  }
  //Formatear Validaciones
  get formatters (){
    return formatters.JsonApi
  }
}
module.exports = RegistroUser
