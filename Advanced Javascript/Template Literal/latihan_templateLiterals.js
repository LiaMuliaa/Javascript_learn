// Template Literals/Template String

//                  1. HTML Fragments
// const mhs = {
//     nama: 'Mulia',
//     umue: 20,
//     nrp: '0838405950',
//     email: 'mulia@gmail.com'
// };

// const el = `<div class="mhs"
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;




//                  2. Looping
// const mhs = [
//     {
//         nama: 'Mulia',
//         email: 'muliaS@gmail.com'
//     },
//     {
//         nama: 'Mutia',
//         email: 'mutiaS@gmail.com'
//     },
//     {
//         nama: 'Nina',
//         email: 'ninaS@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`)}
// </div>`;




//                  3. Conditionals
// ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;




//                  4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Mulia',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Objek'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;


document.body.innerHTML = el;