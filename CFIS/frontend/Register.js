const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
     const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        name: name,
        email: email,
        password: password
    };

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Registration successful");

           
            window.location.href = "login.html";
        } else {
            alert(result.message || "Registration failed");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
});