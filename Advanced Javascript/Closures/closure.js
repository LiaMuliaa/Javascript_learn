// Closure

function init() {
    let nama = 'Lia';           // local variable
    function tampilNama() {     // inner function (closure*)
        console.log(nama);      // akses ke parent variable
    }
    tampilNama();
}
init();

// Kenapa menggunakan Closure?
//     1. Untuk membuat Function Factories
function ucapkanSalam(waktu) {
    // inner function
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

// Fectories Function -> membuat function sesuai function yang lain
let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatMalam('Lia'));


//     2. Untuk membuat Private Method / private Variable
let add = (function() {
    let counter = 0;        // private
    return function () {        // inner function
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());