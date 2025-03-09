
// let user1 = {
//     username: 'John',
//     age: 25,
//     displayInfo(){
//         console.log(this.username)        
//     }
// }

// let user2 = {
//     username: 'Bob',
//     age: 18,
//     displayInfo(){
//         console.log(this.username)        
//     }
// }
// let user3 = {
//     username: 'Anna',
//     age: 20,
//     displayInfo(){
//         console.log(this.username)        
//     }
// }
// user1.displayInfo()
// user2.displayInfo()
// user3.displayInfo()

function User(username, age){
    this.username = username
    this.age = age

    // this.displayInfo = function(x = "Hi"){
    //     console.log(x, this.user)        
}
    this.displayInfo = function(x = "Hi"){
        console.log(x, this.username) 
    
}
let user1 = new User("John", 25)
let user2 = new User("Bob", 18)
let user3 = new User("Anna", 20)

console.log(user1);
console.log(user2);
console.log(user3);
user1.displayInfo("Hello")
user2.displayInfo()
user3.displayInfo()


