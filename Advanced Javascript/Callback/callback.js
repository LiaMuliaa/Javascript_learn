//      Synchronous Callback
// function tampilkanPesan(Callback) {
//     const nama = prompt('Masukkan Nama : ');
//     Callback(nama);
// } 
// tampilkanPesan(nama => alert(`Halo, ${nama}`));


//      Synchronous Callback
// const mhs = [
//     {
//         "nama": "Mulia",
//         "nrp" : "04567835",
//         "email": "mulia@gmail.com",
//         "jurusan": "Informatika",
//         "idDosenPA": 1
//     },
//     {
//         "nama": "Mila",
//         "nrp" : "04563487",
//         "email": "mila@gmail.com",
//         "jurusan": "Informatika",
//         "idDosenPA": 2
//     },
//     {
//         "nama": "Mita",
//         "nrp" : "04562693",
//         "email": "mita@gmail.com",
//         "jurusan": "Teknik Industri",
//         "idDosenPA": 2
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');



//          Asynchronous Callback - menggunakan Ajax vanilla JS/JS murni
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if(xhr.readyState === 4) {      // 0 -4
//             if(xhr.status === 200) {    // 200 = OK 'mengakses sebuah halaman'
//                 success(xhr.response);
//             } else if (xhr.status === 404) {    // 404 = Error
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// getDataMahasiswa('Advanced Javascript\Callback\mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.array.forEach(element => console.log(element.nama));
// }, () => {

// });


//      JQuery
console.log('mulai');
$.ajax({
    url: 'Advanced Javascript/Callback/mahasiswa.json',
    success: (mhs) => {
        console.log(mhs);
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');