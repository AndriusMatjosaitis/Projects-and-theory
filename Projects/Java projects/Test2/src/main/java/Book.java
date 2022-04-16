public class Book {
    int numberOfPages;
    String title;

    public Book(int numberOfPages, String title) {
        this.numberOfPages = numberOfPages;
        this.title = title;
    }

    public int getNumberOfPages() {
        return numberOfPages;
    }

    public String getTitle() {
        return title;
    }
}
