// Function to toggle between Sign Up and Sign In forms
function toggleForm(type) {
    document.getElementById("message").innerText = ""; // Clear messages
    if (type === 'signup') {
        document.getElementById("form-title").innerText = "Sign Up";
        document.getElementById("signup-form").style.display = "block";
        document.getElementById("signin-form").style.display = "none";
    } else {
        document.getElementById("form-title").innerText = "Sign In";
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("signin-form").style.display = "block";
    }
}

// Sign-up function with validation
function signup() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email-signup").value.trim();
    let password = document.getElementById("password-signup").value.trim();

    if (name === "" || email === "" || password === "") {
        document.getElementById("message").innerText = "All fields are required!";
        return;
    }

    fetch("/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Sign-up successful! Redirecting to dashboard...");
            localStorage.setItem("userEmail", email); // ✅ Store user email
            window.location.href = "/dashboard.html";
        } else {
            document.getElementById("message").innerText = data.message;
        }
    })
    .catch(error => console.error("Error:", error));
}

// Sign-in function with validation
function signin() {
    let email = document.getElementById("email-signin").value.trim();
    let password = document.getElementById("password-signin").value.trim();

    if (email === "" || password === "") {
        document.getElementById("message").innerText = "All fields are required!";
        return;
    }

    fetch("/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login successful! Redirecting to dashboard...");
            localStorage.setItem("userEmail", email); // ✅ Store user email
            window.location.href = "/dashboard.html";
        } else {
            document.getElementById("message").innerText = data.message;
        }
    })
    .catch(error => console.error("Error:", error));
}

// ==================== 🔽 Submit Code for Analysis & Store in DB 🔽 ====================

function submitCode() {
    let code = document.getElementById("code").value.trim();
    let email = localStorage.getItem("userEmail"); // ✅ Retrieve logged-in user's email

    if (!email) {
        alert("User email not found! Please log in again.");
        return;
    }

    if (code === "") {
        alert("Please enter some code to analyze!");
        return;
    }

    fetch("http://localhost:8080/code/analyze", {  // ✅ Ensure correct backend URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, code })  // ✅ Send email & code
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from server:", data);  // ✅ Debugging

        if (data.success) {  
            alert(data.message);  // ✅ Show "Code stored successfully!" alert

            // ✅ Once user clicks "OK", display time complexity
            document.getElementById("result").innerText = "Time Complexity: " + data.complexity;
        } else {
            document.getElementById("result").innerText = "Error: " + (data.error || "Something went wrong.");
        }
    })
    .catch(error => {
        console.error("Fetch error:", error);
        document.getElementById("result").innerText = "Error: Unable to connect to the server.";
    });
}

