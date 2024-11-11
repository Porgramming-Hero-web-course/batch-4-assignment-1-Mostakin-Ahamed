Type Guards in TypeScript enhance type safety by allowing you to refine types at runtime. While TypeScript's type system checks types at compile time, Type Guards enable dynamic type narrowing, which is crucial when working with variables that can have multiple types (e.g., union types or unknown types). Without Type Guards, TypeScript can't infer the exact type, leading to potential runtime errors.

Using Type Guards ensures operations are performed only on valid types, improving code reliability. They are particularly useful when handling user input, third-party APIs, or unpredictable data types.

There are 4 types of type guards in Typescript.

1. "typeof" Type Guard: Used to narrow down primitive types such as string, number, boolean, etc.

function greet(person: string | number) {
if (typeof person === 'string') {
console.log(`Hello, ${person}!`);
} else {
console.log(`Your age is ${person}`);
}
}

in this code, the typeof operator checks if the variable is string or a number.

2. "instanceof" Type Guard: This is used to check if an object is an instance of a specific class or constructor function.

class Dog {
bark() {
console.log("Woof!");
}
}

class Cat {
meow() {
console.log("Meow!");
}
}

function makeSound(animal: Dog | Cat) {
if (animal instanceof Dog) {
animal.bark();
} else {
animal.meow();
}
}

in this examples, the instance of operator checks is the variable is an instance of class, which allows the use of class specific methods.

3. User-Defined Type Guards: Custom functions that return a type predicate (is TypeName) to refine types based on custom logic.

function isString(value: any): value is string {
return typeof value === 'string';
}

function printLength(value: string | number) {
if (isString(value)) {
console.log(value.length);
} else {
console.log(value.toFixed(2));
}
}

in this example, we can see that the function isString has a user definded custom return type where the function will always return its value as a string.

4. "in" Operator Type Guard: Checks if a specific property exists within an object, useful for distinguishing between object types with different structures.

interface Dog {
type: 'dog';
bark(): void;
}

interface Cat {
type: 'cat';
meow(): void;
}

function speak(pet: Dog | Cat) {
if ('bark' in pet) {
pet.bark();
} else {
pet.meow();
}
}

here the "in" operator checks if a specific property exists in the object passed to the function.
