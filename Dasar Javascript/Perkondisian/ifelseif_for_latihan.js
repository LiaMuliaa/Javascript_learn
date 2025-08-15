var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var angkotLembur1 = 8;
var angkotLembur2 = 10;
var angkotLembur3 = 5;

for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot<= angkotBeroperasi && noAngkot !== angkotLembur3){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } else if(noAngkot === angkotLembur1 || noAngkot === angkotLembur2 || noAngkot === angkotLembur3){
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else{
        console.log("Angkot No. " + noAngkot + " tidak beroperasi dengan baik");
    }
}