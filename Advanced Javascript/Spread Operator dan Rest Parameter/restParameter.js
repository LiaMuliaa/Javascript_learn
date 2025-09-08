//              Rest Parameter
// Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array
// Rest Parameter bisa digunakan diakhir Argument

function jumlahkan(...angka) {
    let total = 0;
    for (const a of angka) {
        total += a;
    }
    return total;
}
console.log(jumlahkan(1,2,3,4,5));


// array destructuring
const kelompok1 = ['Lila', 'Tata', 'Kimy', 'Cila', 'Ana'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

// object destructuring
const team = {
    pm: 'Lia',
    frontend: 'Pira',
    frontend2: 'Vania',
    backennd: 'Cila',
    ux: 'Gina',
    devOps: 'Mila'
}
const { pm,  ...myTeam } = team;
console.log(myTeam);

// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('number', 1, 2, 'Lila', false, 10, true, 'Nina'));