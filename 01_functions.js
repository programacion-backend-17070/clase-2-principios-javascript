function countToThousand() {
    for (let i = 0; i <= 1000; i++) {
        console.log(i)
    }
}

countToThousand();

const anon = function () {
    console.log("no tengo nombre")
}

anon();


const tail = {
    number: 'ZS-ZWG',
    arrival: '10:53:00',
    status: 'ON TIME',
    climbLandingGear: function() {
        console.log("subiendo tren de aterrizaje")
    }
}

tail.climbLandingGear();

//IIFE

(function() {
    console.log("soy una funcion")
    // do more suff
})();

(function(arg) {
    console.log("soy una funcion con un argumento" + arg)
    // do more suff
})(arg);