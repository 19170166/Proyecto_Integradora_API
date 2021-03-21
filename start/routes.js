'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
//Ruta para loguear Usuario
Route.post('/Login','AuthController.Login')
//Route.post('/Registro','UserController.store')
//Ruta para guardar user
//Metodo resource genera todas los verbos sin tener que especificar si es UPDATE, DELETE, GET O POST
Route.resource('/Registro','UserController')
          .apiOnly()
          .validator(new Map([
            [['users.store'],['RegistroUser']]
          ]))