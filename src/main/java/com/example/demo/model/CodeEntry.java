package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "code_entries")  // Ensure correct collection name
public class CodeEntry {

    @Id
    private String id;
    private String userEmail;
    private String code;
    private String complexity;

    public CodeEntry(String userEmail, String code, String complexity) {
        this.userEmail = userEmail;
        this.code = code;
        this.complexity = complexity;
    }

    // Getters and Setters
    public String getId() { return id; }
    public String getUserEmail() { return userEmail; }
    public String getCode() { return code; }
    public String getComplexity() { return complexity; }
}
