// Navigation logic
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}






// ---------------------- Task 1: Form Validation ----------------------
const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let valid = true;

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    alert("Registration successful!");
    form.reset();
  }
});





// ------------------ Accordion ------------------
const accordionTitles = document.querySelectorAll(".accordion-title");
accordionTitles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("active");
  });
});







// ------------------ Popup Form ------------------
const popup = document.getElementById("popupForm");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");

openBtn.addEventListener("click", () => popup.style.display = "flex");
closeBtn.addEventListener("click", () => popup.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === popup) popup.style.display = "none";
});



// ------------------ Stylish Popup Button via JS ------------------
const popupButton = document.querySelector("#popupForm .popup-content button");

// Apply styles subscribe button JavaScript
popupButton.style.background = "linear-gradient(135deg, #007bff, #6610f2)";
popupButton.style.color = "white";
popupButton.style.border = "none";
popupButton.style.padding = "12px 30px";
popupButton.style.borderRadius = "30px";
popupButton.style.fontSize = "16px";
popupButton.style.fontWeight = "600";
popupButton.style.cursor = "pointer";
popupButton.style.transition = "all 0.3s ease";
popupButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";

// Add hover effect with JS
popupButton.addEventListener("mouseover", () => {
  popupButton.style.background = "linear-gradient(135deg, #6610f2, #007bff)";
  popupButton.style.transform = "scale(1.05)";
  popupButton.style.boxShadow = "0 0 15px #6610f2, 0 0 25px #007bff";
});

popupButton.addEventListener("mouseout", () => {
  popupButton.style.background = "linear-gradient(135deg, #007bff, #6610f2)";
  popupButton.style.transform = "scale(1)";
  popupButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
});



// ------------------ Stylish "Subscribe Now" Button via JS ------------------
const openPopupBtn = document.getElementById("openPopup");

// Apply gradient style dynamically
openPopupBtn.style.background = "linear-gradient(135deg, #ff6b6b, #f94d6a)";
openPopupBtn.style.color = "white";
openPopupBtn.style.border = "none";
openPopupBtn.style.padding = "14px 35px";
openPopupBtn.style.borderRadius = "35px";
openPopupBtn.style.fontSize = "17px";
openPopupBtn.style.fontWeight = "600";
openPopupBtn.style.cursor = "pointer";
openPopupBtn.style.transition = "all 0.3s ease";
openPopupBtn.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";

// Hover animation
openPopupBtn.addEventListener("mouseover", () => {
  openPopupBtn.style.background = "linear-gradient(135deg, #f94d6a, #ff6b6b)";
  openPopupBtn.style.transform = "scale(1.08)";
  openPopupBtn.style.boxShadow = "0 0 15px #f94d6a, 0 0 25px #ff6b6b";
});

openPopupBtn.addEventListener("mouseout", () => {
  openPopupBtn.style.background = "linear-gradient(135deg, #ff6b6b, #f94d6a)";
  openPopupBtn.style.transform = "scale(1)";
  openPopupBtn.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
});







// ------------------ Background Color ------------------
const colors = ["#ff7675", "#74b9ff", "#55efc4", "#ffeaa7", "#a29bfe", "#fab1a0"];
document.getElementById("colorBtn").addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
