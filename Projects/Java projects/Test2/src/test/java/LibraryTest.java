import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class LibraryTest {

    @Mock
    private List<Book> mockedBooks;

    @Mock
    private Book mockedbook;

    @InjectMocks
    private Library library;

    @Test
    public void Should_GetBooks() {
        when(mockedBooks.get(0)).thenReturn(new Book(5, "title"));

        assertEquals(5, library.getBooks().get(0).numberOfPages);
        assertEquals("title", library.getBooks().get(0).title);
    }

    @Test
    public void Should_ReturnBookWithHighestPageCount_When_LibraryHasBooks() {
        when(mockedBooks.get(0)).thenReturn(new Book(10, "mocks"));
        when(mockedBooks.size()).thenReturn(2);
        when(mockedBooks.get(1)).thenReturn(new Book(43, "mocks are scary"));

        Book actual = library.getBookWithHighestPageCount();

        assertEquals(43, actual.getNumberOfPages());
    }

    @Test
    public void Should_ThrowRuntimeException_When_LibraryIsEmpty() {
        when(mockedBooks.isEmpty()).thenReturn(true);

        assertThrows(RuntimeException.class, () -> library.getBookWithHighestPageCount());
    }
}
