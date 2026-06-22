package com.cvapp.dto;

import java.util.Map;
import lombok.Getter;

@Getter
public class ErrorResponse {
    private final String message;
    private final Map<String, String> errors;

    public ErrorResponse(String message) {
        this(message, Map.of());
    }

    public ErrorResponse(String message, Map<String, String> errors) {
        this.message = message;
        this.errors = errors;
    }
}
