package com.vilnius.academy;

public enum HairColour {
    RED("R1"),
    BLACK("B1"),
    BLUE("EF"),
    GREEN("J1");

    public final String colourCode;

    HairColour(String colourCode) {
        this.colourCode = colourCode;
    }

    public static HairColour valueOfCode(String colourCode) {
        for (HairColour e : values()) {
            if (e.colourCode.equals(colourCode)) {
                return e;
            }
        }
        return null;
    }


}
