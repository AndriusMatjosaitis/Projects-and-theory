package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Task7 {
    public static void main(String[] args) {
//        int[] array = {5, 78 , 19};
        List<Integer> list = new ArrayList(Arrays.asList(5, 78, 19));

        for (int element : list) {
            System.out.print(element + " ");
        }

        list.sort(Comparator.naturalOrder());
        System.out.println(" ");

        for (int element : list) {
            System.out.print(element + " ");
        }

        list.sort(Comparator.reverseOrder());
        System.out.println(" ");

        for (int element : list) {
            System.out.print(element + " ");
        }

    }
}
