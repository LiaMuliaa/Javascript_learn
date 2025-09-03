// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE
// Web untuk visualisasi 'Javascript Visualizer - pythontutor'

console.log(nama); // hasilnya undefined, karena var dibawah dan di set undifined
var nama = 'lia';

// console.log(nama);  // hasilnya lia, karena sudah ada nilai var 

// Creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hal ini disebut 'HOISTING'
// window = global object
// this = window

// Execution phase

console.log(sayHello);   // hanya mau menampilkan function
console.log(sayHello());    // memanggil dan menampilkan isi function (nama, umur undefined)

var namaa = 'lia';
var umur = 21;

function sayHello() {
    return `Halo, nama saya ${namaa}, saya ${umur} tahun`;
}
// console.log(sayHello());    // baru ada nama dan umur nya

// Function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting 

var namaaa = 'mulia sahpira';
var username = '@muliasahpira';

function cetakURL(username) {
    var intagramURL = 'http://instagram.com/';
    return intagramURL + username;
}

console.log(cetakURL(username));

// contoh 2
function a() {
    console.log('ini a');

    function b() {
        console.log('ini b');

        function c() {
            console.log('ini c');
        }

        c();
    }

    b();
}
a();

// contoh 3
function satu() {
    var namas = 'lia';
    console.log(namas);
}

function dua() {
    console.log(namas);
}

console.log(namas);
var namas = 'Inu';
satu();
dua('Lilu');
console.log(namas);