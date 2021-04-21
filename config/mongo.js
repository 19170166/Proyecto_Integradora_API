const Env = use('Env')
 
module.exports = {
  url: Env.get('MONGO_URL', '3.143.15.255'),
  host: Env.get('MONGO_HOST', '3.143.15.255'),
  port: Env.get('MONGO_PORT', '27017'),
  user: Env.get('MONGO_USER', 'angeldavila'),
  pass: Env.get('MONGO_PASS', 'angeldavila'),
  db: Env.get('MONGO_DATABASE', 'Base_de_Datos')
}