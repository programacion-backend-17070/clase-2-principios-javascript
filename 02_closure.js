
function hi(nombre) {
  return function (greeting) {
    return `Hola, ${nombre}. ${greeting}`
  }
}

// Hola, Lalo. Buenas tardes

const hiLalo = hi("Lalo") // gargabe collector no entra

const greeting = hiLalo("Buenas tardes")

console.log(greeting) // gargabe collector entra


// Ejemplo
// Tenemos un avion que quiere enviar un mensaje a tierra
// los mensajes a tierra son enviados a traves de cierto topico
// ya existe una funcion send() que toma dos argumentos pero no queremos 
// que los pilotos puedan cambiar el topico, este debe de quedar fijo.
// Crear una funcion que permita al piloto enviar cualquier mensaje
// sin darle posibilidad de cambiar el topic

// function send(topic, msg) {
//   console.log("enviando mensaje " +  msg + " al topic: " + topic + "-mx")
// }

// function pub(msg) {
//   const topic = "/topic"
//   send(topic, msg)
// }

// pub("Hola")

const user = {
  name: 'Eduardo Velazquez',
  nickname: 'lalomx',
  job: 'Fulstack Developer',
  location: 'Mexico'
}

const html = `
  <div class="user">
    <h2>
        ${user.name}
    </h2>
    <p class="nickname">${user.nickname}</p>
    <p class="location">${user.location}</p>
  </div>
`

console.log(html)