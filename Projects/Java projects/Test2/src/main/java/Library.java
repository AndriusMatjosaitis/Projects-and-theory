import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Library {
        List<Book> books = new ArrayList<Book>();

        public List<Book> getBooks() {

                return books;
        }

        public Book getBookWithHighestPageCount() {
                if (books.isEmpty()) {
                        throw new RuntimeException();
                }

                Book bookWithHighestPageCount = books.get(0);

                for (int i = 1; i < books.size(); i++) {
                        Book book = books.get(i);
                        if (book.numberOfPages > bookWithHighestPageCount.numberOfPages) {
                                bookWithHighestPageCount = book;
                        }
                }
                return bookWithHighestPageCount;
        }

}
