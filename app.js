/**
 * @file app.js
 * @author Jack Stubblefield
 * @description An example of classes
 *
 */
'use strict';

/**
 * The definition of the Animal class with a constructor to demonstrate creating a class and initialzing values.
 */

class Animal {
	/**
	 * Initializes the animal object with name, color, age.
	 *
	 * @param {object} props - the properties for this animal
	 */
	constructor(props) {
		this.name = props.name;
		this.color = props.color;
		this.age = props.age;
	}
}

/**
 * This is the class for a Dog and it illustrates inheritance by extending Animal.
 */
class Dog extends Animal {
	/**
	 *
	 * @param {object} props - the properties object
	 */
	constructor(props) {
		super(props);
		this.type = props.type;
	}

	/**
	 * The Dog barks.
	 */
	speak = () => {
		console.log(`${this.name} barks!`);
	};

/**
 * Says good things about this Dog
 */
	goodBoi = () => {
		console.log(`${this.name} is a good ${this.type}`);
	};
}

/**
 * Creates a new Dog 
 * * Note that it inherits the parent class (name, color, age)
 */
const spot = new Dog(
	{
		name: 'Spot',
		color: ['Black', 'White'],
		age: 10,
	},
	'dalmation'
);

spot.speak();
spot.goodBoi();
