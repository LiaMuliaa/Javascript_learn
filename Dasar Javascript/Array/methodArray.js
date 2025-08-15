var arr = ['Lia', 'Thea', 'Thiu', 'Dudi'];
//      1. Length
console.log(arr.length);

//      2. Join
console.log(arr.join(' - '));    // yg didalam kurung bisa dicustom sesuai tanda pemisah apa yang diinginkan

//      3. Push
arr.push('Ninu');
console.log(arr.join(' - '));

//      4. Pop
arr.pop();
console.log(arr.join(' - '));

//      5. Unshift
arr.unshift('Lea');
console.log(arr.join(' - '));

//      6. Shift
arr.shift();
console.log(arr.join(' - '));

//      7. Splice
// splice(indexAwal, mauDihapusJumlahBerapaElemen, elemenBaru1, elemenBaru2, ...);
arr.splice(2, 0, "Nina");
console.log(arr.join(' - '));

//      8. Slice
// slice(indexAwal,indexAkhir); --indeksAwal akan dibawa ke array baru, --indeksAkhir tidak dibawa ke array baru
var arr2 = arr.slice(1,4);
console.log(arr.join(' - '));
console.log(arr2.join(' - '));

//      9. forEach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['Lia', 'Liu', 'Leo'];

nama.forEach(function(e, i) {
    console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
});

//      10. Map
var number = [1,2,5,3,6,8,4];
var number2 = number.map(function(e) {
    return e * 2;
});
console.log(number2.join(' - '));

//      11. Sort
number.sort(function(a,b){
    return a-b;     // membuat array terurut dengan benar
});
console.log(number.join(' - '));

//      12. Filter
var number3 = number.filter(function(x){
    return x > 5;
});
console.log(number3.join(' - '));

//      13. Find
var number4 = number.find(function(x){
    return x > 5;
});
console.log(number4);