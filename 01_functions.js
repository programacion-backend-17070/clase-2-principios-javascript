// pure functions: siempre tiene el mismo output
function countToThousand() {
  for (let i = 0; i <= 1000; i++) {
    console.log(i)
  }
}

// countToThousand()

// function expression
// IIFE
(function() {
  console.log("soy anonima")
})()

// sdasdasdgdfjghjkj()

function creaTuFunction() { //outer function
  let nombre = "lalo"
  return function() { // inner function
    nombre = "juan"
    console.log("soy aninoma x2")
  }
  // more
}

// creaTuFunction()();

// const anon2 = creaTuFunction();
// anon2()

(function(arg) {
  console.log("soy una funcion con argumento " + arg)
  // do more stuff
})("Hola")

const nombre = "lalo"

function scope() {
  const numero = 2
  console.log(numero, nombre)
}

scope()
// console.log(numero)