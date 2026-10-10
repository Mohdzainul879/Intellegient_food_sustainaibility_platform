async function loadProfile() {

    try {
        const response = await fetch("http://localhost:5000/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (response.ok) {

            document.getElementById("name").value = data.name;
            document.getElementById("email").value = data.email;
            document.getElementById("phone").value = data.phone;

        } else {
            alert(data.message || "Unable to load profile");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
}


const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value
    };

    try {

        const response = await fetch("http://localhost:5000/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Profile updated successfully");
        } else {
            alert(result.message || "Profile update failed");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
});

loadProfile();