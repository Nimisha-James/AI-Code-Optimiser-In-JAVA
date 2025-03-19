package com.example.demo.service;

import com.example.demo.model.CodeEntry;
import com.example.demo.repository.CodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimeComplexityService {

    @Autowired
    private CodeRepository codeRepository;

    public String analyzeAndStoreComplexity(String code, String userEmail) {
        String complexity;

        if (code.contains("for") && code.contains("for")) {
            complexity = "O(n^2)";
        } else if (code.contains("for")) {
            complexity = "O(n)";
        } else {
            complexity = "O(1)";
        }

        // ✅ Store code in MongoDB
        CodeEntry entry = new CodeEntry(userEmail, code, complexity);
        codeRepository.save(entry);

        return complexity;
    }
}
