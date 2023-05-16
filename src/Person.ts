export class Person {
    private firstName: string;
    private lastName: string;

    constructor(first: string, last: string){
        this.firstName = first;
        this.lastName = last;
    }

    sayHello(): void {
        console.log("hi my " + this.firstName + " "+ this.lastName );
    }
    
    

    
}