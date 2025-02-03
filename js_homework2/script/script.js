console.log("HW_30_02_2025");
///======Home work======
// Легкие задачи:
// 1. Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий 
// только числа больше 10.
let numArr = [12, 5, 8, 130, 44]
let newArr = numArr.filter(function(value, i){
    if(value > 10){
        return value;
    }
})
console.log(newArr);

// 2. Напишите программу, которая принимает массив строк и возвращает массив 
// длин этих строк по возрастанию.
// ["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]
let firstArr = ["one", "three", "two"];
let lengthArr = firstArr.map(function(value, i){
    return value.length
})

lengthArr.sort(function(a, b){
    return a - b
})
console.log(lengthArr);

// 3. Есть массив строк. Отсортируйте строки по их длине (от самой короткой 
// к самой длинной) и выведите результат.
let strArr = ['hello', 'world', 'javascript', 'code']
let lengthStrArr = strArr.map(function(value, i){
    return value.length
})
lengthStrArr.sort(function(a, b){
    return a - b
})

console.log(lengthStrArr);

//Cредной сложности задачи:
// 4. Подсчитайте количество гласных букв в строке. Выведите результат.
// let vowels = [a, e, i, o, u]
// "hello" -> 2
// "javascript" -> 3
// "world" -> 1
let vowels = ['a', 'e', 'i', 'o', 'u'];
let sum1 = 0
let word = "hello"; 
let letters = word.split("")
for (let i = 0; i < letters.length; i++) {
    if(vowels.includes(letters[i])){
        sum1 ++
    }    
}
console.log(sum1)

//5 Дана строка. Отсортировать её символы в алфавитном порядке.
// "javascript"-> "aacijprstv"
// "hello" -> "ehllo"

let str1 = "hello"
let str2 = str1.split("")
let str3 = str2.sort(function(a, b){
    return a. localeCompare(b)
})
let str4 = str3.join("")
console.log(str4)


let str11 = "javascript"
let str12 = str11.split('').sort(function(a, b){
    return a. localeCompare(b)
}).join("")
console.log(str12);

// Сложные задачи
//6. Есть произвольная строка, определите, сколько раз каждый символ встречается в этой строке. 
// Выведите результат в формате: "Символ X => Y".
// "hello"
// Символ h => 1
// Символ e => 1
// Символ l => 2
// Символ o => 1
let str = "hello"
let characterCount = {} // Создаем пустой объект для хранения количества символов
str.split('').reduce(function(acc, char){  // Используем метод reduce для подсчета символов
    if(!acc[char]){  // Проверяем, встречается ли символ уже в объекте
        acc[char] = 1  // Если нет, устанавливаем количество 1
    }else{
        acc[char] += 1  // Если есть, увеличиваем количество на 1
    }
    return acc
}, characterCount)

// 7. Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.
let numbers2 = [3, 1, 4, 1, 5, 9];

let sumOfEvens = numbers2.filter(function (num) {
    if (num % 2 == 0) {
    return num % 2 == 0
    }
    }).map(function (even) {
    return even ** 2
    }).reduce(function (acc, evenPower) {
    return acc + evenPower
    })
    console.log(sumOfEvens);

let sumSquare = numbers2.filter(function(value){
    return value % 2 === 0
  }).reduce(function(sum, value){
    return sum += value ** 2
  }, 0)

console.log(sumSquare)

let sumSquare1 = numbers2.reduce(function(sum, value){
    if(value % 2 === 0){
        return sum += value ** 2 
    }
    return sum    
  }, 0)

console.log(sumSquare1);

// 8. Дан массив чисел. Проверить, упорядочены ли элементы по возрастанию.
// [1, 5, 9, 12, 36] => true
// [1, 5, 12, 9, 36, -5] => false

let arr = [1, 5, 9, 12, 36]
let isSorted = true;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]){
        isSorted =  false;
        break
    }    
}
console.log(isSorted);

// 9. Дан массив слов. Создайте объект, где ключами будут первые буквы слов, а значениями — массивы слов, начинающихся на эти буквы. Например։
// ['apple', 'banana', 'apricot', 'blueberry', 'cherry'] -> 
// {
//    a: ['apple', 'apricot'], 
//    b: ['banana', 'blueberry'], 
//    c: ['cherry']
// }
let fruit = ['apple', 'banana', 'apricot', 'blueberry', 'cherry']
let newObjekt = {}
fruit.forEach(function(value){
    let firstLetter = value[0]; // Получаем первую букву слова
    // Проверяем, существует ли ключ в объекте
    if (newObjekt[firstLetter] === undefined) {
        newObjekt[firstLetter] = []; // Если нет, создаем новый массив
    }
    
    newObjekt[firstLetter].push(value); // Добавляем текущее слово в массив
});

console.log(newObjekt);

