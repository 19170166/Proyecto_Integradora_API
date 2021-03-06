'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')

Ws.channel('chat', ({ socket }) => {
  console.log('user joined with %s socket id', socket.id)
})

Ws.channel('NivelP','NivelPController').middleware(['auth'])
Ws.channel('NivelS','NivelController').middleware(['auth'])

Ws.channel('Regado','RegarController').middleware(['auth']);

Ws.channel('SignIn:*','SignInController')
// Ws.channel('SignIn:*',({socket}) => {
//   console.log(socket.topic)
// })