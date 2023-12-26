//Object an object is an identifiable property that has charecteristics of its own
const car1={
    model:"XUV",
    color:"blue",
    year:"2022",

    drive: function(){
        console.log(`You are Driving ${this.model}`);
    },
    brake: function(){
        console.log("Stop the car");
    }
}
const car2={
    model:"Porsche",
    color:"blue",
    year:"2022",

    drive: function(){
        console.log(`You are Driving ${this.model}`);
    },
    brake: function(){
        console.log("Stop the car");
    }
}
/*console.log(car.model);
console.log(car.color);
console.log(car.year);
*/
car1.drive();
car2.drive();
//car.brake();

//this refers to the reference to a particular object



