
// Paradigmas de programacion
// Es un estilo de progamacion y hay varias formas.
// conjunto de métodos sistemáticos aplicables en todos
// los niveles del diseño de programas para resolver problemas computacionales

// Programacion orientada a objetos
// Se crean objetos a partir de modelos para la manipulacion de datos.
// Cada objeto tiene una funcionalidad en especifico o modela algo en especifico

// ES6

// 1. Objetos literales
// 2. Prototipos
// 3. Function constructors

const aircraft = {
  number: 'ZS-ZWG',
  manufacturer: 'Boeing',
  capacity: 165,
  maxSpeed: 920,
  fuel: 80,
  flightHours: 450
}

const aircraft2 = new Object();
aircraft2.number = 'ZS-ZWG'
aircraft2.mannufacturer = 'Boeing'
aircraft2.capacity = 165
aircraft2.maxSpeed = 920
aircraft2.fuel = 80
aircraft2.flightHours = 45

function Aircraft() {
  this.number = 'ZS-ZWG'
  this.mannufacturer = 'Boeing'
  this.capacity = 165
  this.maxSpeed = 920
  this.fuel = 80
  this.flightHours = 45
}

const aircraft3 = new Aircraft()