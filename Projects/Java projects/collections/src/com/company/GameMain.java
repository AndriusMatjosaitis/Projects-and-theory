package com.company;

import java.util.*;
import java.util.stream.Collectors;

public class GameMain {
    public static void main(String[] args) {
        Game game1 = new Game("Doom", Genre.ACTION, 19.99, 30);
        Game game2 = new Game("SimCity", Genre.SIMULATOR, 35.50, 25);
        Game game3 = new Game("Red Alert", Genre.STRATEGY, 29.99, 50);
        Game game4 = new Game("Diablo", Genre.RPG, 49.99, 200);

        List<Game> games = new ArrayList<>();
        games.add(game1);
        games.add(game2);
        games.add(game3);
        games.add(game4);

        for (Game game : games) {
            System.out.println(game);
        }
        System.out.println(" ");
        games.remove(1);

        for (Game game : games) {
            System.out.println(game);
        }

        Collections.sort(games, new PriceComparator());
        System.out.println(" ");
        for (Game game : games) {
            System.out.println(game);
        }
        Collections.sort(games, new PriceComparator().reversed());
        System.out.println(" ");
        for (Game game : games) {
            System.out.println(game);
        }

        games.stream().filter(game -> game.getPrice() > 10 && game.getCopiesSold() > 5);
        for (Game game : games) {
            System.out.println(game);
        }

        List<Game> sorted = games.stream().sorted(Comparator.comparingInt(Game::getCopiesSold)).collect(Collectors.toList());
        System.out.println(sorted);

        Optional<Game> minCopiesSold = games.stream().min(Comparator.comparingInt(Game::getCopiesSold));
        System.out.println(minCopiesSold.get());

        Optional<Game> maxCopiesSold = games.stream().max(Comparator.comparingInt(Game::getCopiesSold));
        System.out.println(maxCopiesSold.get());
    }

    private static void printGames(List<Game> games) {
        for (Game game : games) {
            System.out.println(game);
        }
        System.out.println(" ");
    }

    private static void incrementPrice(List<Game> games) {
        games.stream().forEach(game -> game.setPrice(15));
        System.out.println(games);
    }


}
