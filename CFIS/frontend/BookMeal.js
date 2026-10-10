const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const mealId = document.getElementById("mealId").value;
    const mealType = document.getElementById("mealType").value;
    const date = document.getElementById("date").value;

    const data = {
        mealId: mealId,
        mealType: mealType,
        date: date
    };

    try {

        const response = await fetch("http://localhost:5000/book-meal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Meal booked successfully");
        } else {
            alert(result.message || "Meal booking failed");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
});


async function cancelMeal(bookingId) {

    try {

        const response = await fetch(
            `http://localhost:5000/book-meal/${bookingId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        const result = await response.json();

        if (response.ok) {
            alert("Meal booking cancelled");
        } else {
            alert(result.message || "Cancellation failed");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
}