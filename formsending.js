document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.getElementById("reservationForm");

  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
      lastname: document.getElementById("lastname").value,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      people: document.getElementById("people").value,
      apartment: document.getElementById("apartment").value,
      checkin: document.getElementById("checkin").value,
      checkout: document.getElementById("checkout").value,
      message: document.getElementById("message").value,
    };

    // Send form data to server
    fetch("https://server-2gcr.onrender.com/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Reservation submitted successfully!");
          // Optionally, reset the form after successful submission
          window.close();
        } else {
          throw new Error("Failed to submit reservation.");
        }
      })
      .catch((error) => {
        console.log(error);
        console.error("Error:", error);
        alert("Failed to submit reservation. Please try again later.");
      });
  });
});
