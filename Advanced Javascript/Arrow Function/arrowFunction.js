//             Function Expression - 1 Parameter
const tampilNama = function (nama) {
    return `Halo, ${nama}`;
}
console.log(tampilNama('Lala'));

//              Arrow Function - 1 Parameter
const tampilNama1 = (nama) => { return `Halo, ${nama}`; }
console.log('Lila');

//              Arrow Function - Parameter lebih dari 1
const greeting = (nama, waktu) => { return `Selamat ${waktu}, ${nama}`; }
console.log(greeting('Nina', 'Pagi'));

//              Arrow Function - 1 Parameter [Implisit return]
const tampilNama2 = nama => `Halo, ${nama}`; 
console.log('Lila');

//              Arrow Function - Tanpa Parameter
const tampilNama3 = () => 'Hello World!';
console.log(tampilNama3());


let mahasiswa = ['Nia Lisa', 'Lila Agustina', 'Kimberly'];

// contoh MAP
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// Ubah menjadi         Arrow Function - mengembalikan Array
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);

// Ubah menjadi         Arrow Function - mengembalikan Object
let jumlahHuruf1 = mahasiswa.map(nama => ({ nama: nama, jmlHUruf: nama.length }));
console.table(jumlahHuruf1);