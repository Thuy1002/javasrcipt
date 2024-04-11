let str = 'không biết học js như thế nào !';

//11.xáo bỏ tất cả các chữ cái "h" trong chuỗi
//const ar_7 = str.replace(/h/g, '');
//console.log(ar_7);

const abc = str.split('');

const b = [
    'k',
    'h',
    'ô',
    'n',
    'g',
    ' ',
    'b',
    'i',
    'ế',
    't',
    ' ',
    'h',
    'ọ',
    'c',
    ' ',
    'j',
    's',
    ' ',
    'n',
    'h',
    'ư',
    ' ',
    't',
    'h',
    'ế',
    ' ',
    'n',
    'à',
    'o',
    ' ',
    '!',
];
console.log( abc);
const ac = abc.filter((value,index,arr) => {
  
  return value !== 'h';
});
console.log(ac.join(''));

