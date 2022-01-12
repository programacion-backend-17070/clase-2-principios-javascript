class Aircraft {
  static airport = "MEX"

  constructor(fuel, flightHours) {
    this.number = 'ZS-ZWG'
    this.mannufacturer = 'Boeing'
    this.capacity = 165
    this.maxSpeed = 920
    this.fuel = fuel
    this.flightHours = flightHours 
  }

  // metodos de clase
  // metodos de instancia

  agregarFlightHours(hours) {
    this.flightHours += hours
  }

  static getMaxSpeed() {
    return Aircraft.airport
  }
}

// clase y objeto

const aircraft = new Aircraft(100, 0)

console.log(aircraft.flightHours)

aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)
aircraft.agregarFlightHours(10)

console.log(aircraft.flightHours)

const maxSpeed = Aircraft.getMaxSpeed()

console.log(maxSpeed)