// //pisahkan genap dan ganjil 1sd100
// tampungGenap = [];
// tampungGanjil = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     tampungGenap = [...tampungGenap, i];
//   }
//   tampungGanjil = [...tampungGanjil, i];
// }
// console.log({ tampungGenap, tampungGanjil });

// soal 2 carilah bilangan prima 1sd100
let tampungPrima = [];
for (let i = 1; i <= 100; i++) {
  let bill = 0;
  for (let a = 1; a <= i; a++) {
    if (i % a == 0) {
      bill = bill + 1;
    }
  }
  if (bill == 2) {
    tampungPrima = [...tampungPrima, i];
  }
}
console.log(tampungPrima);
