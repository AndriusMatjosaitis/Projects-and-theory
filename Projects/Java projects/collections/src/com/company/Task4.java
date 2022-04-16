package com.company;

import java.util.HashMap;
import java.util.Map;

public class Task4 {
    public static void main(String[] args) {
        Map<Integer, String> vardai = new HashMap<>();
        vardai.put(1, "Houmeris");
        vardai.put(2, "Bartas");
        vardai.put(3, "Liza");

        System.out.println(vardai);

        if(vardai.containsKey(3)) {
            vardai.put(3, "Mege");
        }

        System.out.println(vardai);

        for (Map.Entry<Integer, String> vardas:vardai.entrySet()) {
            System.out.println(vardas.getKey() + " " + vardas.getValue());
        }
    }
}
