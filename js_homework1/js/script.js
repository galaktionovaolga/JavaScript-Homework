console.log("firstHomework_19_January");

//задачу № 5 делала с чатом GPT - не все понимаю....посуму сбрасівается текущее слово...и можно ли 
//решить задачу по другому?

//задача № 7 - почему не срабатывает else?

//последняя задача из классной работы - там в тексте написан вопрос

//1. +Проверить слово на палиндром (чтобы регистр не влиял на результат)
 //let word = 'annA'
// let lowerString = word.toLowerCase();
// let reversedWord = '';
// //console.log(word. length -1);
// //console.log(word[4]);
// for (let i = lowerString.length -1; i >= 0; i--) {    
//     reversedWord += lowerString[i]
// }
// if(lowerString === reversedWord){
//     console.log('Palindrom')    
// }else{
//     console.log('NotPalindrom');    
// }
//console.log(lowerString.split("").reverse().join("") === lowerString ? "Палиндром" : "Не палиндром");
//console.log(word.split("").reverse().join("").toLowerCase() === word.toLowerCase() ? "Палиндром" : "Не палиндром");


//2. +Средняя задача
// Напишите программу, которая принимает строку из чисел, разделенных запятыми (например, 
// "1,2,3,4,5") и выводит сумму всех чисел.

// let myString = "1,2,3,4,5";
// let newMyString = myString.split(",");
// //console.log(newMyString);
// let sum2 = 0;
// for (let i = 0; i < newMyString.length; i++) {
//     if(!isNaN(newMyString[i])){
        
//         sum2 = sum2 + Number(newMyString[i]);
//     }     
// }
// console.log(sum2);

//3. +Дана массив их строк. Программа должна подсчитать количество слов, которые содержат 
// больше 5 символов.

// let animals = ['elefant', 'cat', 'dog', 'monkey'];
// let count = 0;
// for (let i = 0; i < animals.length; i++) {
//     if(animals[i].length > 5){
//         count++            
//     }       
// }
// console.log(count); 


//4. +Создайте массив чисел от 1 до 20. Выведите все четные числа из этого массива.
// let evenArray = [];
// for (let i = 0; i <= 20; i++){  
//     evenArray.push(i);
// }
// for (let i = 0; i < evenArray.length; i++) {
        
//    if(evenArray[i] %2 === 0){
//     console.log(evenArray[i]);
//    }
// }

//5+? Сложная задача
// Дана строка из нескольких слов, разделенных пробелами. Напишите программу, 
// которая переворачивает каждое слово в строке и выводит полученный результат.

// let str = "Hello my world";
// let result1 = "";
// let word1 = "";
// for (let i = 0; i < str.length; i++) {
//     if(str[i] === ' '){ // Если символ - пробел, добавляем перевернутое слово к результату
//         result1 += word1.split("").reverse().join("") + ' ';
//         word1 = ""; // Сбрасываем текущее слово
//     }else{
//         word1 += str[i]; 
//     }    
// }
// // Добавляем последнее слово (если есть) к результату
// if (word1) {
//     result1 += word1.split("").reverse().join("");
// }
// console.log(result1);

//6. +Средняя задача
// Сгенерируйте массив из 10 случайных чисел от 1 до 100. Найдите максимальное и минимальное число в массиве, а также их разницу.
// let randomArray = [];
// for (let i = 0; i < 10; i++) {
//     let rand = Math.round(Math.random() * 100) 
//     randomArray.push(rand)
// }
// let maxNum = randomArray[0];
// let minNum = randomArray[0];
// for (let i = 0; i < randomArray.length; i++) {
//     if(randomArray[i] > maxNum){
//         maxNum = randomArray[i]
//     }
//     if(randomArray[i] < minNum){
//         minNum = randomArray[i]
//     }    
// }
// let difference = maxNum - minNum

// console.log(randomArray);
// console.log(maxNum);
// console.log(minNum);
// console.log(difference);


//7. ??+ Сложная задача
// Дан массив чисел, например [10, 15, 3, 7, 20, 8, 25]. Найдите 
//два числа, сумма которых равна 25, и выведите их. Если таких чисел 
// нет, выведите сообщение об этом.
// let numbers = [10, 15, 3, 7, 20, 8, 25];
// let target = 25;
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         //начинаем с i + 1, чтобы не складывать одно и тоже число

//         if(numbers[i] + numbers[j] === target){
//             console.log(`Найденные числа: ${numbers[i]} и ${numbers[j]}`);            
//         }        
//     }        
// }  
//      else {
//     console.log("Числа не найдены"); //почему не отрабатывает else???
    
// }


//8. +Напишите программу, которая принимает строку из букв и цифр (например, "a1b2c3d4"), 
// и создает два массива отдельно с числами и отдельно с буквами из этой строки: [1, 2, 3, 4] [a, b , c, d]

// let input = "a1b2c3d4"; // Входная строка
// let letters = []; // Массив для букв
// let numbers1 = []; // Массив для чисел

// for (let i = 0; i < input.length; i++) {
// let symbol = input[i];   
//     if(isNaN(symbol)){
//         letters.push(symbol)
//     } else{
//         numbers1.push(+symbol)//преобразовала строчные значения в числа
//     }    
// }
// console.log(letters);
// console.log(numbers1);



// Вопрос по задаче на уроке!!
// дан массив чисел [5, 2, -6, 2, 10, 15, 23, -13, 51, -37]
// получить сумму только положительных чисел и вывести результат в консоли в виде такой строки
// "5+2+2+10+15+23+51=результат"

// let array = [5, 2, -6, 2, 10, 15, 23, -13, 51, -37];
// let positiveArray = [];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 0){
//         positiveArray.push(array[i])
//         sum = sum + array[i] // почему array[i], а не  positiveArray[i]???
//     }  
// }
// console.log(positiveArray.join("+") + " = " + sum);  

