//@ts-check
class Animal {
	constructor(name, age){
		console.log(`${name} is constructed.`);
		this.name = name;
		this.age = age;
	}

	whoAmI(){
		return `This is an animal instance named ${this.name} and is ${this.age} years old.`
	}
}

let bobby = new Animal('Bobby', 2);
console.log(bobby.whoAmI());

bobby.name = 'not bobby';
console.log(bobby.name);


// inheritance
class Dog extends Animal {
	constructor(name, age, breed) {
		super(name, age);
		this.breed = breed;
	}
	logBreed(){
		return `${this.name} is a ${this.breed}. ${this.whoAmI()}. `
	}
}

let mike = new Dog("Mike", 2, "Siberian Husky");
console.log(mike.logBreed());