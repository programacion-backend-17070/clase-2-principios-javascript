let aircraft = 'ZS-ZWG'
let landed = true

if (landed) {
    let airport = 'CPT'
    console.log(aircraft)
    console.log(airport)
}

let airport = 'DUR'
landed = false

console.log(landed)
console.log(airport)

// no redeclarar

// let airport = 'MEX'

// CONST
const speed = 920
const height = 10900

if (speed < 1235) {
    console.log("no es supersonico")
    const speed = 800
    const state = "off"

    console.log(state)
    console.log(speed)
}

{
    const state = "on"
    const speed = 0

    if (speed === 0) {
        const state = "in"
    }

    console.log(state)
    console.log("un bloque")
}

console.log(speed)

let speed2 = speed

speed2 += 50

console.log(speed2)
console.log(speed)

const tail = {
    number: 'ZS-ZWG',
    arrival: '10:53:00',
    status: 'ON TIME'
}

// tail = {} NO ES POSIBLE

tail.arrival = '11:30:00';
tail.status = 'DELAYED';

console.log(tail)

const tail2 = tail