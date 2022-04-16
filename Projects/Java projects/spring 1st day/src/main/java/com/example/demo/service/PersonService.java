package com.example.demo.service;

import com.example.demo.model.api.CreatePersonRequest;
import com.example.demo.model.api.PersonResponse;
import com.example.demo.model.domain.Person;
import com.example.demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> fetchPersons() {
        return personRepository.findAll();
    }

    public Optional<Person> fetchPerson(Long id) {
        return personRepository.findById(id);
    }

    public Person createPerson(CreatePersonRequest request) {
        Person person = Person.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .middleName(request.getLastName())
                .email(request.getLastName())
                .phone(request.getLastName())
                .build();
        return personRepository.save(person);
    }

    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }

    public List<Person> fetchPersons(String firstName, String lastName) {
        if (firstName != null && lastName != null) {
            return personRepository.findAllByFirstNameAndLastName(firstName, lastName);
        } else if (firstName != null) {
            return personRepository.findAllByFirstName(firstName);
        } else if (lastName != null) {
            return personRepository.findAllByLastName(lastName);
        } return personRepository.findAll();
    }
}
