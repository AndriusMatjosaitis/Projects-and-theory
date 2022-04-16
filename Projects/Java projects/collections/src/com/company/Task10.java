package com.company;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class Task10 {
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

        List<Student> sorted = students.stream().sorted(Comparator.comparingInt(Student::getAge)).collect(Collectors.toList());
        System.out.println(sorted);

        Optional<Student> minAge = students.stream().min(Comparator.comparingInt(Student::getAge));
        System.out.println(minAge.get());

        Optional<Student> maxAge = students.stream().max(Comparator.comparingInt(Student::getAge));
        System.out.println(maxAge.get());
    }
}
