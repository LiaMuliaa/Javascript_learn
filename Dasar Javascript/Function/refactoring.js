// MENGUBAH FUNCTION INI
        
// function tambah(a,b) {
    //     return a + b;
// }

// function kali(a,b) {
    //     return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// alert(hasil);


// MENJADI SEPERTI INI, MENGUNAKAN REFACTORING
function jumlahVolumeDuaKubus(a,b) {
    return a * a * a * b * b * b;
}
alert(jumlahVolumeDuaKubus(8,3));