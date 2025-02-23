//1. Создайте класс Car с свойствами mark (марка), model (модель) и 
// year (год выпуска). Добавьте метод age(), который вычисляет возраст 
// автомобиля (на основе текущего года).
class Car{
    constructor(mark, model, year){
        this.mark = mark
        this.model = model
        this.year = year
    }
    age(){
        let currentYear = 2025
        return currentYear - this.year
        
    }
}
let car1 = new Car ("BMW", "GTS", 2023)
console.log(car1);

console.log(car1.age());

// 2.Модифицируйте класс Person, добавив новое свойство email и 
// метод change_email(newEmail), который меняет email только если 
// новый email содержит символ "@" и ".", иначе выбрасывает исключение.
class Person{
    constructor(username, age, email){
        this.name = username
        this.age = age
        this.email = email
    }
    change_email(newEmail){
         
        if(newEmail.includes('@') && newEmail.includes('.')){
            this.emal = newEmail
            return this.email
        }
        throw new Error("Недопустимый email")
        }
}
let user = new Person("Anna", 26, 'anna@gmail.com') 

console.log(user);
console.log(user.change_email('newanna@gmail.com'));
//console.log(user.change_email('newanna@gmail/com'));


//3. Создайте класс Library, который хранит статический массив книг. 
// Каждая книга – это объект с свойствами title и author. Добавьте 
// статический метод addBook(book), который добавляет книгу в библиотеку, 
// и статический метод listBooks(), который выводит список книг в консоль.
class Library {
    static books = [
        {
            title: "Граф Монте-Кристо",
            author: "Дюма"
        },
        {
            title: "Жажда жизни",
            author: "Ирвинг Стоун"
        },
        {
            title: "Ночь в Лиссабоне",
            author: "Ремарк"
        }
    ];

    static addBook(book) {
        let exists = false;
        for (let i = 0; i < Library.books.length; i++) {
            if (Library.books[i].title === book.title && Library.books[i].author === book.author) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            Library.books.push(book);
            console.log(`Книга "${book.title}" добавлена в библиотеку.`);
        } else {
            console.log(`Книга "${book.title}" уже есть в библиотеке.`);
        }
    }

    static listBooks() {
        if (Library.books.length === 0) {
            console.log("Библиотека пуста.");
        } else {
            console.log("Список книг в библиотеке:");
            for (let i = 0; i < Library.books.length; i++) {
                console.log(`"${Library.books[i].title}" — автор: ${Library.books[i].author}`);
            }
        }
    }
}
Library.addBook({ title: "1984", author: "Джордж Оруэлл" });
Library.addBook({ title: "Жажда жизни", author: "Ирвинг Стоун" });
Library.listBooks();

//4. Создайте класс Rectangle с приватными свойствами #width и #height. 
// Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли 
// устанавливаться только положительными числами. Добавьте метод area(), 
// который возвращает площадь прямоугольника.
class Rectangle{
    #width
    #height 
    constructor(width, height){
        this.width = width
        this.height = height
    }

get width() {
   return this.#width 
  }
  get height() {
    return this.#height
   }

   set width(value) {
    if (value > 0) {
      this.#width = value;
    } else {
      throw new Error("Ширина должна быть положительным числом");
    }
  }
  set height(value) {
    if (value > 0) {
      this.#height = value;
    } else {
      throw new Error("Высота должна быть положительным числом");
    }
  }
  area(){
    return this.#width * this.#height 
  }
}
let figure1 = new Rectangle(10, 4)
console.log(figure1.width);
console.log(figure1.height);
console.log(figure1.area());

//5. Создайте класс BankAccount с приватным свойством #balance. 
// Реализуйте методы для депозита и снятия средств. Добавьте 
// геттер для получения текущего баланса. При попытке снять 
// сумму, большую чем баланс, выбрасывайте исключение. 
// Затем создайте статический метод, который ведёт учёт всех 
// созданных счетов (например, массив accounts) и статический 
// метод для расчёта общего баланса всех счетов.
class BankAccount {
    #balance;
    static accounts = []
  
    constructor(initialBalance = 0) {
      this.#balance = initialBalance;

      BankAccount.accounts.push(this)
    }
    
    deposit(amount){
        if(amount <=0){
            throw new Error ("Сумма депозита должна быть положительной.")
        }
        this.#balance = this.#balance + amount
    }
    getMoney(amount) {
      if (amount > this.#balance) {
        throw new Error("Недостаточно средств на счете.");
      }
      this.#balance -= amount;
    }  
    get balance() {
      return this.#balance;
    }

    static getTotalBalance(){
        return BankAccount.accounts.reduce(function(acc, account){
            return acc + account.balance
        }, 0)
    }    
  }
let account1 = new BankAccount(1000)
let account2 = new BankAccount(500)
let account3 = new BankAccount(200)
console.log(account1.balance);
account1.deposit(500)
console.log("Текущий баланс после депозита:", account1.balance)
account1.getMoney(800)
console.log("Текущий баланс после снятия:", account1.balance);
console.log("Общий баланс всех счетов:", BankAccount.getTotalBalance());

account1.getMoney(1000)
console.log(account1.balance);

