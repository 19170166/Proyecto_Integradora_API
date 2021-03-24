'use strict'

class RegarController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onDato(data){
    this.socket.broadcast('dato',data)
  }

}

module.exports = RegarController
