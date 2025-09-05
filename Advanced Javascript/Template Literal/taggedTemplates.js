//                          Tagged Templates
const nama = 'Mulia';
const umur = 20;

function coba(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;


    // menggunakan Reduce
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'');
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
console.log(str);





//                      Highlight
const nama1 = 'Mulia';
const umur1 = 20;
const email1 = 'muliaS@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}

const str1 = highlight`Halo, nama saya ${nama1}, saya ${umur1} tahun, dan email saya adalah : ${email1}.`;
document.body.innerHTML = str1;