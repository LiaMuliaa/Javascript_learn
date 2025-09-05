//                  For Of
// Creates a loop iterating over Iterable Object
// Iterable Object -> String, Array, Arguments/NodeList, TypedArray, Map, Set, User-defined Iterables

//      For Of - Array
const mhs = ['Lia', 'Lilu', 'Lika'];
// contoh 1
for( const m of mhs) {
    console.log(m);
}
// contoh 2
for (const [i, m] of mhs.entries()) {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

//      For Of - String
const nama = 'Lia';
for(const n of nama) {
    console.log(n);
}


//      NodeList
const liNama = document.querySelectorAll('.nama');
for (n of liNama) {
    console.log(n.innerHTML);
}


//      Arguments
function jumlahkanAngka() {
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahkanAngka(1,2,3,4,5));




//                  For In
// Creates a loop onlu iterating over enumerable 
const mahasiswa = {
    nama: 'Lila',
    umur: 23,
    email: 'lilaS@gmail.com'
}

for (m in mahasiswa) {
    console.log(mahasiswa[m]);
}