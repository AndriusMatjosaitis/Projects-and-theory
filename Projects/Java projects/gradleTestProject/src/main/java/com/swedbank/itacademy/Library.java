package com.swedbank.itacademy;

import java.util.Comparator;
import java.util.List;

public record Library(List<Book> books) {

    public List<Book> getAllBooks(List<Book> books) {
        return books;
    }

    public int getNumberOfBooks(List<Book> books) {
        return books.size();
    }

    public String findBookByTitle(String title, List<Book> books) {
        Book foundBook = null;
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).title() == title) {
                foundBook = books.get(i);
            }
        }
        return String.valueOf(foundBook);
    }

    public String getBookWithMostPages(List<Book> books) {
        String maxPages = books.stream().max(Comparator.comparingInt(Book::pages)).toString();
        return maxPages;
    }
}
