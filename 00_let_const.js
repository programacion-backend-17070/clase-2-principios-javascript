// let aircraft = "ZS-ZWG"
// let landed = true

// if (landed) {
//   let airport = "CPT"
//   console.log(airport)
//   console.log(aircraft)
// }
// // console.log(airport)


const speed = 920
const height = 10900

if (speed < 1235) {
  console.log("no es supersonico")
  // speed = 700
  const speed2 = 100
  // console.log(speed)
}

let height2 = height

height2 = 9000


// console.log(height, height2)

const tail = {
  number: 'ZS-ZWG',
  arrival: '10:53:00',
  status: 'ON TIME'
}

// tail = {}

tail.status = "DEALYED"

const tail2 = tail

tail2.arrival = "12:53:00"

console.log(tail2, tail)