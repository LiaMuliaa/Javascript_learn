// parameter a dan b
function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

// argument
var hasil = kali(tambah(1,2), tambah(3,4));
alert(hasil);