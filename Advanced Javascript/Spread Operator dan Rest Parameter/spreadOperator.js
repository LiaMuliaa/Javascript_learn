//                  Spread Operator
// Memecah (expand/unpack) iterables menjadi single element
// Iterable Object -> String, Array, Arguments/NodeList, TypedArray, Map, Set, User-defined Iterables

const mhs = ['Mulia', 'Lia', 'Lita'];
console.log(...mhs[0]);

//      Menggabungkan 2 array
const mahasiswa = ['Mulia', 'Lia', 'Lita'];
const dosen = ['Ayu', 'Hilda', 'Windy'];
const orang = [...mahasiswa, 'Ana', ...dosen];
console.log(orang);

//      Meng-copy Array
// contoh 1
const mhs1 = ['Mulia', 'Lia', 'Lita'];
const mhs2 = [...mhs1];
mhs2[0] = 'Fina';
console.log(mhs2);


// case baru
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;