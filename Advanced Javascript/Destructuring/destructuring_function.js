//          Destruction Function Return Value
function kalkulasi(a, b) {
    return {
        tambah: a + b, 
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
console.log(kurang);


//           Destruction Function Arguments
const mhs = {
    nama: 'Mulia',
    umur: 20,
    email: 'muliaS@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

function cetakMhs({ nama, umur, nilai: {tugas, uts, uas} }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs));