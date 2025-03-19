package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "data")
public class CodeSnippet {
    @Id
    private String id;
    private String email;
    private String code;
    private String timeComplexity;

    public CodeSnippet() {}

    public CodeSnippet(String email, String code, String timeComplexity) {
        this.email = email;
        this.code = code;
        this.timeComplexity = timeComplexity;
    }

    public String getEmail() { return email; }
    public String getCode() { return code; }
    public String getTimeComplexity() { return timeComplexity; }
}
