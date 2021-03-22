'use strict'

class NivelController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onDato(data){
    this.socket.broadcast('dato',data)
  }

  onOpen(){}

  onClose(){}
}

module.exports = NivelController
