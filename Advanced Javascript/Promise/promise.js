//          Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)


//      Contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if ( ditepati ) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji...');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK!: ' + response));


//          Contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu!');
        }, 2000);
    } else {
        setTimeout(() => {
            resolve('Tidak ditepati setelah beberapa waktu!');
        }, 2000);
    }
});

console.log('mulai');
// pending terlihat
// console.log(janji2.then(() => console.log(janji2)));

// pending tidak kelihatan
janji2
    .finally(() => console.log('selesai menunggu!'))
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK!: ' + response));
console.log('selesai');



//              Promise.all()
// contoh connect ke 2 API
const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Sandhika Galih',
            pemeran: 'Doddy, Erik'
        }])
    }, 1000);       // nunggu 1 detik
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Palembang',
            temp: 29,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);        // nunggu setengah detik
});

// jalani satu-satu
film.then(response => console.log(response));
cuaca.then(response => console.log(response));

// jalani sekaligus
Promise.all([film, cuaca])
    // tampil gabung dalam satu array
    // .then(response => console.log(response));

    // tampil pisah array
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });