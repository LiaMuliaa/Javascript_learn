// Cara untuk membuat Object pada Javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
let mahasiswa1 = {
    nama: 'Lia',
    energi: 10, 
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

let mahasiswa2 = {
    nama: 'Tia',
    energi: 20, 
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

// 2. Function Declaration [Object.Create()]
// Problem nye jadi ada 2 objek (objek untuk method dan object untuk manggil)
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },

    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat tidur!`);
    }
};

function Mahasiswa3(nama, energi){
    let mahasiswa4 = Object.create(methodMahasiswa);
    mahasiswa4.nama = nama;
    mahasiswa4.energi = energi;

    return mahasiswa4;
}
let tinu = Mahasiswa3('Tinu', 10);

// 3. Constructor Function [Prototype]
// keyword new
function Mahasiswa5(nama, energi){
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa5.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa5.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

Mahasiswa5.prototype.tidur = function(jam) {
    this.energi += jam;
    return `Halo ${this.nama}, selamat tidur!`;
}

let ina = new Mahasiswa5('Ina', 10);

// 4. Objek