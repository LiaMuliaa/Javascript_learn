// fungsi melakukan perulangan memanggil diri nya sendiri
function tampilAngka(n) {
    // base case untuk menghentikan pengulangan
    if(n === 0) return;
            
        console.log(n);
        return tampilAngka(n-1);
}

tampilAngka(10);