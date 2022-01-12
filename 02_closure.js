function hi (nombre) {
  const concat = "Hola, " + nombre
  return function (greeting) {
    return concat + ". " + greeting
  }
}

const hiLalo = hi("Lalo")

console.log(hiLalo("Buenas tardes!"))

// Ejemplo
// Tenemos un avion que quiere enviar un mensaje a tierra
// los mensajes a tierra son enviados a traves de cierto topico
// ya existe una funcion send() que toma dos argumentos pero no queremos 
// que los pilotos puedan cambiar el topico, este debe de quedar fijo.
// Crear una funcion que permita al piloto enviar cualquier mensaje
// sin darle posibilidad de cambiar el topic
function send(topic, msg) {
  console.log("enviando mensaje " +  msg + " al topic: " + topic)
}

function pub(msg) {
  send("/topic", msg)
}

pub("Hola")