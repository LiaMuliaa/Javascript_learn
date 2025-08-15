// cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
// this mengembalikan object Global


// cara 2 - object literal 
var obj = {};
obj.halo1 = function() {
    console.log(this);
    console.log('halo');
}
obj.halo1();
// this menegmbalikan object yang bersangkutan 


// cara 3 - constructor 
function Hallo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Hallo();
var obj2 = new Hallo();
// this mengembalikan object yang baru dibuat 