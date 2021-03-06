package com.example.demo.repository;

import com.example.demo.model.domain.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    Optional<Person> findAllById(Long id);

    List<Person> findAllByFirstNameAndLastName(String firstName, String lastName);
    List<Person> findAllByFirstName(String firstName);
    List<Person> findAllByLastName(String lastName);
}
