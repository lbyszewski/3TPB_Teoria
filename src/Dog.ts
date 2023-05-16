import { Animal } from "./Animal";

export class Dog extends Animal {

    protected age: number;

    private country: string;

    constructor(age: number, country: string) {
        super();
        this.age = age
        this.country = country
    }

    prepareAge(age: number): void {
            this.age = age;
    }
    sayHello(): void {
        console.log("Dog have a: " + this.age + " " + this.country);
    }

}