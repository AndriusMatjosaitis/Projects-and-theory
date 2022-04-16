package unittests;

import com.swedbank.itacademy.Book;
import com.swedbank.itacademy.Library;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class LibraryTest {

    @Mock
    private List<Book> mockedBooks;

    @InjectMocks
    private Library library;

    @Spy
    List<Book> spyBooks = new ArrayList<Book>();

    @Test
    public void ShouldGetBooks() {

        spyBooks.add(new Book(5, "title"));

        assertEquals(1, library.getAllBooks(spyBooks).size());
        assertEquals(5, library.getAllBooks(spyBooks).get(0).pages());
        assertEquals("title", library.getAllBooks(spyBooks).get(0).title());
    }

    @Test
    public void ShouldGetBookNumber() {

        spyBooks.add(new Book(5, "test"));
        spyBooks.add(new Book(3, "bible"));
        spyBooks.add(new Book(26, "newTitle"));
        assertEquals(3, library.getNumberOfBooks(spyBooks));

        spyBooks.add(new Book(5, "test"));
        spyBooks.add(new Book(26, "newTitle"));
        assertEquals(5, library.getNumberOfBooks(spyBooks));

        spyBooks.add(new Book(5, "test"));
        spyBooks.add(new Book(3, "bible"));
        spyBooks.add(new Book(26, "newTitle"));
        assertEquals(8, library.getNumberOfBooks(spyBooks));
    }

    @Test
    public void ShouldFindBookByTitle() {

        spyBooks.add(new Book(5, "test"));
        spyBooks.add(new Book(3, "bible"));
        spyBooks.add(new Book(26, "newTitle"));

        assertEquals("Book[pages=26, title=newTitle]", library.findBookByTitle("newTitle", spyBooks));
        assertEquals("Book[pages=3, title=bible]", library.findBookByTitle("bible", spyBooks));
        assertEquals("Book[pages=5, title=test]", library.findBookByTitle("test", spyBooks));
    }

    @Test
    public void ShouldFindBookWithMostPages() {
        spyBooks.add(new Book(5, "test"));
        spyBooks.add(new Book(3, "bible"));
        spyBooks.add(new Book(26, "newTitle"));

        Mockito.verify(spyBooks).add(new Book(5, "test"));
        Mockito.verify(spyBooks).add(new Book(3, "bible"));
        Mockito.verify(spyBooks).add(new Book(26, "newTitle"));

        assertEquals("OptionalBookpages=26, title=newTitle", library.getBookWithMostPages(spyBooks));
    }
}
