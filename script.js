//complete this code
class Person {
	constructor(name,age){
        this.name=name;
        this.age=age;
    }

    get aName(){
        return this.name;
    }

    set updatedAge(newAge){
        this.age=newAge; 
    }
}

class Student extends Person {
	constructor(name,age,course){
        super(name,age)
    }

    study(){
        return this.name+" is studying"
    }
}

class Teacher extends Person {
	constructor(name,age){
        super(name,age)
    }

    teach(){
        return this.name+" is teaching"
    }
}

let person1=new Person("muddu",26)
let myNewAge=person1.updatedAge=18;
console.log(myNewAge)

console.log(person1.aName);

console.log(person1)

let student=new Student("mustaq",26,"javascript")
console.log(student)

let teacher=new Teacher("guddu",40)
console.log(student.study())
console.log(teacher.teach());

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
