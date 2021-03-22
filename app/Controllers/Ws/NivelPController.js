'use strict'

class NivelPController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onDato(data){
    console.log(this.socket.id)
    console.log(data)
    this.socket.broadcast('dato',data)
  }

  onOpen(){}
  
  onClose(){}
}

module.exports = NivelPController
