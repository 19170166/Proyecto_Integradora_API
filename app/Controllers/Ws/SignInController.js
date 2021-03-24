'use strict'

class SignInController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onSession(data){
    this.socket.broadcast('session',data)
  }

}

module.exports = SignInController
