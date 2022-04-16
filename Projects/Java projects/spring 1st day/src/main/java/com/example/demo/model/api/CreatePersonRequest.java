package com.example.demo.model.api;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
public class CreatePersonRequest {

    @Schema(description = "Person first name", example = "Andrius")
    @NonNull
    @Size(min = 3, max = 20)
        private String firstName;

    @Schema(description = "Person last name", example = "Matjosaitis")
    @NonNull
    @Pattern(regexp = "^[a-zA-Z]+$")
        private String lastName;

    @Schema(description = "Person email", example = "email@gmail.com")
        private String email;

    @Schema(description = "Person phone number", example = "869999999")
        private String phone;

}