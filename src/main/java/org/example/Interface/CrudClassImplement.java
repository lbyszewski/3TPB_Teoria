package org.example.Interface;
// Klasa przyjmująca Inteface z nadpisanymi metodami
public class CrudClassImplement implements CRUDClass{

    // Metody rekurencyjne - dowołanie się do samej siebie
    @Override
    public double Silnia(double n) {
        if(n==0){
            return 1;
        } else {
            return n* Silnia(n-1);
        }
    }

    @Override
    public double Fibb(double n) {
        if(n<3){
            return 1;
        }
        else {
            return Fibb(n-2) + Fibb(n-1);
        }
    }
}
