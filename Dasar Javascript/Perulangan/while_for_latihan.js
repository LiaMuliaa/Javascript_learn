var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 6;

while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    noAngkot++;
}

for (var angkotTidakBeroperasi = angkotBeroperasi+1; angkotTidakBeroperasi <= jumlahAngkot; angkotTidakBeroperasi++){
    console.log("Angkot No. " + angkotTidakBeroperasi + " tidak beroperasi dengan baik");
}

// nilai 1-7 sudah di cek di perulangan while dan ketika di angka 7 false
// maka dari itu bisa tetap lanjut pakai var noAngkot 
// Dan perulangan For mengecek kembali dari 7-11 [TAPI INI TIDAK AMAN KARENA JIKA WHILE DIHILANGKAN BALIK KE SEMULA 1-10]
// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
//     console.log("Angkot No. " + noAngkot + " tidak beroperasi dengan baik.");
// }