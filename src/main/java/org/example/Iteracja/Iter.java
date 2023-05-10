package org.example.Iteracja;

public class Iter {
    public static void main(String[] args) {

        // Iteracja liczb od 1 do 100 - sposób inkrementacja
        for (int i = 1; i<=100;i++){
            System.out.println(i);
        }

        // Iteracja  silnii - sposób dekrementacja
        int sum = 1;
        for(int i=5;i>1;i--){
            sum*=i;
        }
        System.out.println(sum);
    }
}
