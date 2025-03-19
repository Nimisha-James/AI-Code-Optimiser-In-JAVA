# **AI Code Optimizer in Java**  

CodeOptimizer is an AI-driven Spring Boot & MongoDB platform that analyzes, optimizes, and validates Java code. It first compiles and verifies correctness using a custom-built compiler before sending it for AI-driven optimization. The platform compares time complexities of the original and optimized code using a custom analyzer, ensuring efficiency improvements with all data is stored in MongoDB for seamless access and retrieval.  

## **Requirements** 
1. JDK (Java Development Kit) and Eclipse IDE  
2. Apache Tomcat v9  
3. MongoDB Compass  
4. JDBC Driver  
5. Spring Boot (Configured in Eclipse)


### **Steps**  
1. Configure Apache Tomcat v9
2. Open Eclipse IDE -> Help -> Eclipse Marketplace -> Find Spring Tools -> Install **Spring Tools 4**
3. Restart eclipse
4. Select **File → New → Other -> Spring Starter Project**
5. Choose **Maven** as the build tool
6. Add dependencies - Spring Boot DevTools
                    - Spring Data MongoDB
                    - Spring Web
                    - Thymeleaf
7. Run **CodeOptimizerApplication.java** file as Spring Boot App 


