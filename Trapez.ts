import { Figura } from "./Figura";

export class Trapez extends Figura {
   
    protected bokA: number;
    protected bokB: number;
    protected bokC: number;
    private bokD: number;
    protected bokH: number;

    setBokA(a: number){
        this.bokA = a;
    }

    getBokA(){
        return this.bokA;
    }


    
    setBokB(a: number){
        this.bokB = a;
    }

    getBokB(){
        return this.bokB;
    }


    
    setBokH(a: number){
        this.bokH = a;
    }

    getBokH(){
        return this.bokH;
    }


    oblicz(): number {
        let result  = ((this.getBokA() + this.getBokB()) * this.getBokH())/2;
        return result; 
    }
    pokaz(): void {
        console.log("pole traapezu wynosi: " +  this.oblicz());
    }
   




    


}