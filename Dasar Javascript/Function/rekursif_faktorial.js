function faktorial(n) {
    // base case untuk menghentikan pengulangan
    if(n === 0) return 1;
        return n * faktorial(n-1);
}

console.log(faktorial(5));