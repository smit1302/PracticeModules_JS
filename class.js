class student{
constructor(name,age,marks)
{
    this.name=name;
    this.age=age;
    this.marks=marks;
}
study()
{
    console.log(`${this.name} is studying`);
}
}
const student1= new student("Smit",21,8.5);
console.log(student1.name);
console.log(student1.age);
console.log(student1.marks);