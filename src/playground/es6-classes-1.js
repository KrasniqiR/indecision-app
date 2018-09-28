//Setup constructor to take name and age (default to 0)
//getDescription - Ron Krasniqi is 21 year(s) old.
 
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!.`
    }

    getDescription() {
       // return 'Hi. I am ' + this.name + '!';
       return `${this.name} is ${this.age} years(s) old.`;
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Thier major is ${this.major}.`;
        }
        return description;
    }
} 

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting();
        
        if(this.homeLocation) {
            greeting += `I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}


const me = new Traveller('Ron Krasniqi', 21, 'London');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());