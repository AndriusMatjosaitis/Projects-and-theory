import org.junit.jupiter.api.*;

public class MathTest {
    @BeforeAll
    public static void setup() {
        System.out.println("Before all");
    }

    @AfterAll
    public static void init() {
        System.out.println("After All");
    }

    @Test
    public void testSubtraction() {
        int left = 4;
        int right = 3;
        int actual = Math.subtractExact(left, right);

        Assertions.assertEquals(1, actual);
    }
}
