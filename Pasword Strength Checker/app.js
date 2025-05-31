// Get DOM elements
var pass = document.getElementById("input");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

// Listen for input in the password field
pass.addEventListener("input", function () {
    var password = pass.value;

    // Show or hide the message
    if (password.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    // Reset previous classes
    msg.classList.remove("weak", "medium", "strong");

    // Check password strength
    if (password.length < 4) {
        str.textContent = "Weak";
        msg.classList.add("weak");
    } else if (password.length >= 4 && password.length < 8) {
        str.textContent = "Medium";
        msg.classList.add("medium");
    } else if (password.length >= 8) {
        str.textContent = "Strong";
        msg.classList.add("strong");
    }
});
