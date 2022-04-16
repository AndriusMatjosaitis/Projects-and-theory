package com.company;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Task6 {
    public static void main(String[] args) {
        Student a = new Student("Zigmas", 24, 2, 43);
        Student b = new Student("Petras", 29, 5, 33);
        Student c = new Student("Jonas", 26, 3, 123);
        Student d = new Student("Paulius", 27, 4, 213);
        Student e = new Student("Andrius", 21, 1, 132);

        List<Student> students = new ArrayList<>();
        students.add(a);
        students.add(b);
        students.add(c);
        students.add(d);
        students.add(e);

        Map<Integer, Student> map = new HashMap<>();
        for (Student student : students) {
            map.put(student.getId(), student);
        }

        map.get(43).setGrade(30);
        map.get(43).setAge(30);

        for (Map.Entry<Integer, Student> student : map.entrySet()) {
            System.out.println(student.getKey() + " " + student);
        }
    }

}

