// Membuat Object

// Object Literal
var mhs1 = {
    nama : "Lia", 
    nrp : "0439455037",
    email : "lia@gmail.com",
    jurusan : "Teknik Informatika"
}
var mhs2 = {
    nama : "Lira", 
    nrp : "0439454567",
    email : "lira@gmail.com",
    jurusan : "Teknik Industri"
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjectMahasiswa('Nofariza', '0230401230', 'nofariza@yahoo.com', 'Teknik Pangan');

// Constructor
// nama functionnya diawali dengan huruf BESAR
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Tika', '0130403213', 'tikaS@icloud.com', 'Teknik Mesin');