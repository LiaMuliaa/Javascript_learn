//              Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Mulia'];
// const [salam, satu, dua, nama] = perkenalan;

//  Skipping items
const [salam, , , nama] = perkenalan;
console.log(nama);

//  Swap items -> menukar isi array
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

//  return value pada function
function coba() {
    return [1, 2];
}
const [a1, b1] = coba();
console.log(b);

//  Rest Parameter
const [a3, ...values] = [1, 2, 3, 4, 5];
console.log(a3);
console.log(values);




//              Destructuring Object
const mhs = {
    namas: 'Lia',
    umurs: 20
}
const { namas, umurs } = mhs;
console.log(namas);

// Assigment tanpa deklarasi object
({ namae, umure } = { namae: 'Lia', umure: 20});
console.log(namae);

//  Assign ke variabel baru
const mhs2 = {
    nama: 'Liki',
    umur: 24
}
const { nama:n, umur: u } = mhs2;
console.log(u);

//  Memberi nilai default + assign ke variabel baru
const mhs3 = {
    nama: 'Lina',
    umur: 27,
    email: 'lina@gmail.com'
}
const { nama:na, umur: um, email: em = 'emailS@default.com' } = mhs3;
console.log(em);

//  Rest Parameter
const mhs4 = {
    nama: 'Lini',
    umur: 29,
    email: 'lini@gmail.com'
}
const { name, ...value } = mhs4;
console.log(value);

//  Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs5 = {
    id: 123,
    nama: 'Lini',
    umur: 29,
    email: 'lini@gmail.com'
}

function getIdMhs({ id }) {
    return id;
}
console.log(getIdMhs(mhs5));
