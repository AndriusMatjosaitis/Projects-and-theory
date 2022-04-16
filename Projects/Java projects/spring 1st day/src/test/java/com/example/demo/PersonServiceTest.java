package com.example.demo;

import com.example.demo.model.domain.Person;
import com.example.demo.repository.PersonRepository;
import com.example.demo.service.PersonService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)

public class PersonServiceTest {

    @Mock
    private PersonRepository repositoryMock;

    @InjectMocks
    private PersonService service;

    @Test
    public void When_FirstNamePresent_Expect_PersonsMatchingFirstName() {
        Person expected = Person.builder()
                .firstName("name").build();
        when(repositoryMock.findAllByFirstName("name")).thenReturn(List.of(expected));

        List<Person> actual = service.fetchPersons("name", null);
        assertEquals(expected.getFirstName(), actual.get(0).getFirstName());
    }
}
