package com.company;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class Task8 {
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

        Collections.sort(students, new AgeComparator().reversed());

        for (Student student: students) {
            System.out.println(student);
        }
    }
}
