// 1-misol a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang, qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.

// let a = 1,
//   b = 3,
//   c = 0;
// if (a <= 0 || b <= 0 || c <= 0) {
//   console.log(0);
// }
// 2-misol Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,  Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.

// let haftaKun = 1;

// switch (haftaKun) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//   default:
//     console.log("none");
// }

// 3-misol Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.  Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi. Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.

// let years = 2024;
// if (years % 4 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 4-misol a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.

// let a_soni = 2;

// if (a_soni >= 100 && a_soni < 1000) {
//   return console.log(3);
// } else if (a_soni >= 10 && a_soni < 100) {
//   return console.log(2);
// } else if (a_soni >= 1 && a_soni <= 10) {
//   return console.log(1);
// }

// 5-misol a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.

// let aSoni = 2,
//   bSoni = 3,
//   cSoni = -2;

// if( aSoni >= 0 && bSoni >= 0 && cSoni > 0){
//     console.log(true);
// }else {
//     console.log(false);
// }

// 6-misol a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. a sonini ham hisobga oling.

// let a = 10, sum = 0;

// for (let i = 0; i < a; i++) {
//     sum += i;
// }
// console.log(sum);

// 7-misol a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring. Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi. Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi. a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas. Shuning uchun bu mukammal son emas

// let a = 24,
//   sum = 0;

// for (let i = 1; i < a; i++) {
//   if (a % i == 0) sum += i;
// }
// sum == a ? console.log(true) : console.log(false);

// 8-misol  n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3

// let n = 5628, count = 0;
// while(n >= 1){
//     count++;
//     n=n/10;
// }
// console.log("Kiritilgan son " + count + " xonali");

// 9-misol n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak. Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .

// let n = 121, box = '';
// let limit = n;
// while(limit >= 1){
//    box+=limit%10;
//    limit=Math.floor(limit/10);
// }
// if(Number(box) === n) console.log("Palindrom son");
// else console.log("palindrom son emas");

// 10-misol n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.

// let a = 23;
// 1-usul

// a = a.toString().split("").reduce((sum , value)=>sum + Number(value), 0)
// console.log(a);
// 2-usul

// let sum =0 ;
// while(a > 0){
//     sum+=a%10;
//     a = Math.floor(a/10);
// }
// console.log(sum);

// 11-misol array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring

// let arr1 = [1, 2, 3, 4];
// let arr2 = []
// for (let i = 0; i < arr1.length; i++) {
//     arr2[i] = arr1[arr1.length - i - 1]
// }
// console.log(arr2);

// 12-misol n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.

// let n = 7;
// let arry = [2, 5, 7, 4, 2];
// let count = 0;
// for (let i of arry) {
//   // console.log(i);
//   if (i === n) {
//     count++
//   }
// }
// console.log(count);
// console.log("Natija: bu yerda " + count + " ta " + n + " bor");

// 13-misol a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini  yig'indisi a ga teng bo'lishini aniqlang va ularni  konsolga chiqaring.

// let a = [2, 5, 8, 3, 10];
// let index1, index2;

// // Arrayning ikkita elementini qidirish
// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] + a[j] === a) {
//             index1 = i;
//             index2 = j;
//             break;
//         }
//     }
// }

// // Natijani konsolga chiqarish
// if (index1 !== undefined && index2 !== undefined) {
//     console.log(`Arrayning ${index1}-chi va ${index2}-chi indeksidagi elementlari yig'indisi a ga teng.`);
//     console.log(`Elementlar: ${a[index1]} va ${a[index2]}`);
// } else {
//     console.log("Bunday ikkita element topilmadi, ularning yig'indisi a ga teng emas.");
// }

// 14-misol Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring (sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.

// let arry = [2,5,8,4,6]
// arry = arry.sort((a,b)=>a-b)
// console.log(arry);

// 15-misol Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping. Bunda array elementlari bir biriga teng emas deb oling.
// let arry = [2, 9, 3, 6, 1,8];
// let max = Math.max(...arry);
// let min = max - arry[0];
// let box 
// for (let i = 1; i < arry.length; i++) {
//     if(max-arry[i] < min){
//          box = arry[i]
//     }
// }
// console.log(box);
