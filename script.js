// Modal and donation functionality
const donateBtn = document.getElementById("donate-btn");
const donateBtnAbout = document.getElementById("donate-btn-about");
const donationModal = document.getElementById("donationModal");
const closeModal = document.getElementById("closeModal");

// Open modal when donate button is clicked
donateBtn.addEventListener("click", () => {
    donationModal.style.display = "flex";
});

donateBtnAbout.addEventListener("click", () => {
    donationModal.style.display = "flex";
});

// Close modal when close button is clicked
closeModal.addEventListener("click", () => {
    donationModal.style.display = "none";
});

// Handle form submission and redirect to UPI
const donationForm = document.getElementById("donationForm");
donationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    const donorName = document.getElementById("donor-name").value;
    const donorEmail = document.getElementById("donor-email").value;
    const donorPhone = document.getElementById("donor-phone").value;
    const donationAmount = document.getElementById("donation-amount").value;

    // Check if all fields are filled out
    if (donorName && donorEmail && donorPhone && donationAmount) {
        // Close modal after submission
        donationModal.style.display = "none";

        // Redirect to UPI payment page
        window.location.href = "upi://pay?pa=atchayasenthilkumaran@okaxis&pn=HopeFund&mc=1234&tid=45678&amt=" + donationAmount;
    } else {
        // Optional: Display an alert if validation fails
        alert("Please fill out all fields before proceeding.");
    }
});





//--------------------------

