package com.company;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Task5 {
    public static void main(String[] args) {
        Student a = new Student("Jonas", 25, 4, 11);
        Student b = new Student("Petras", 24, 3, 34);

        List<Student> students = new ArrayList<>();

        students.add(a);
        students.add(b);

        Map<Integer, Student> map = new HashMap<>();
        map.put(1, a);
        map.put(2, b);

        System.out.println(map);

        map.get(2).setGrade(10);

        System.out.println(map);

    }
}
