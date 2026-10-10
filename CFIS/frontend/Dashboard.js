async function loadDashboard() {

    try {
        const response = await fetch("http://localhost:5000/dashboard", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (response.ok) {

            document.getElementById("userName").innerText = data.name;
            document.getElementById("totalBookings").innerText = data.totalBookings;
            document.getElementById("attendance").innerText = data.attendance;
            document.getElementById("accountabilityScore").innerText =
                data.accountabilityScore;

        } else {
            alert(data.message || "Unable to load dashboard");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
}

