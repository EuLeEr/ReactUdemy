class Person {
    constructor(name = "Anonymouse", age = 56) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `Это ${this.name}, в возрасте ${this.age}`;
    }
    getGreeting() {
        return `Hi. I am ${this.name} !`;
    }
}

class Traveler extends Person {
    constructor(namem, age, home = "Moscow") {
        super(name,age);
        this.homeLocation = home;
    }
    getGreeting() {
        let Greeting = super.getGreeting();
        return Greeting + ` I am from ${this.homeLocation}.`;
    }
}

const son = new Traveler("Andrew Ermolov",8);

console.log(son.getDescription());
console.log(son.getGreeting())