// Membuat Function
function jumlahVolumeDuaKubus(a,b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

// Menjalankan Function
alert(jumlahVolumeDuaKubus(8,3));
alert(jumlahVolumeDuaKubus(10,15));