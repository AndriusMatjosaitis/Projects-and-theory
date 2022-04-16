import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class LettersCounterTest {

    private static LettersCounter lettersCounter = new LettersCounter();

    @Test
    public void Should_ThrowIllegalArgumentException_When_TextIsNull() {
        char character = 'd';
        String text = null;
        String expected = String.format("Method input parameter character was = %s and text was = %s", character, text);
        Throwable actual = assertThrows(IllegalArgumentException.class, () -> {
            lettersCounter.countCharacters('d', null);
        });

        assertEquals(expected, actual.getMessage());
    }

    @Test
    public void Should_ReturnCharacterCount_When_TextIsPresent() {
        char character = 'd';
        String text = "dictionary";
        int actual = lettersCounter.countCharacters('d', text);

        assertEquals(1, actual);
    }
}

