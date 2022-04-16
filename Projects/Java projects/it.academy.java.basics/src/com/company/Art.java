package com.company;

public class Art {
    public static int art(String x){
        int height = Integer.parseInt(x);
        for (int level = 0; level < height * 2; level +=2)
        {
            for(int spaces = (height * 2 - level) / 2; spaces >=0; spaces-- ) System.out.print(" ");
            for(int leaf = 0; leaf <= level; leaf++) System.out.print("#");

            System.out.println(" ");
    }
        for (int i = 0; i<height; i++) System.out.print(" ");

        System.out.print("#");

        return height;
    }}
