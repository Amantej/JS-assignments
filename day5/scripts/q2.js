class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Welcome to Community!");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }
    addCoins(user){
        user.luCoins++;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }

    removeCoins(user){
        user.luCoins--;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }
}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }

   removeCourse(user,course){
        user.courses.pop(course);
        console.log(user);
    }
   
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
}

let user1 = new User('Dilip',25,'dilip@gmail.com')
let user2 = new User('Krishnan',21,'k@gmail.com')
let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

User.greet();

user1.login();

admin.addCourse(user1,'Ml');
admin.addCourse(user2,'Python');
admin.addCourse(user2,'JS');

user1.logout();

admin.removeCourse(user2,'JS');

user2.login();

mod.addCoins(user1);
mod.addCoins(user2);
mod.addCoins(user2);
mod.removeCoins(user2);

user2.logout();