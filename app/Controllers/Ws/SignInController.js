'use strict'
const Ws = use('Ws')

class SignInController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onOpen(){
    console.log(this.socket.topic)
  }

  onDato(data){
    this.socket.broadcast('dato',data)
    
  }

  // onSession(data){
  //   //this.socket.broadcast('session',data)
  //   console.log(tthis.socket.topic)
  //   const topic = Ws.getTopic()
  // }

}

module.exports = SignInController
