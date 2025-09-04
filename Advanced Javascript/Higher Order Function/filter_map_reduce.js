const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//                      FILTER
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

//Penulisan menggunakan arrow function
const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);


//                       MAP
// kalikan semua angka dengan 2
const newAngka1 = angka.map(a => a * 2);
console.log(newAngka1);


//                       REDUCE
// jumlahkan seluruh elemen pada array
const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngka3);


//                      Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5)  // 8,9,9
    .map(a => a * 3)    // 24, 27, 27
    .reduce((acc, cur) => acc + cur); //78
console.log(hasil);