const form = document.getElementById("loginForm");
const dashboardLink = document.getElementById("dashboardLink");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login successful");

            dashboardLink.click();
        } else {
            alert(data.message || "Invalid email or password");
        }

    } catch (error) {
        console.log(error);
        alert("Server error");
    }
});