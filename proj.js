//The 3 Strike Password System Code

let attempts = 3;
const correctUser = "Jesseth0970";
const correctPass = "1234567890";

function checkLogin() {
    const userInp = document.getElementById("username").value;
    const passInp = document.getElementById("password").value;
    const feedback = document.getElementById("loginFeedback");

    if (userInp === correctUser && passInp === correctPass) {
        window.location.href = "dashboard.html";
    } else {
        attempts--;
        if (attempts > 0) {
            feedback.innerHTML = "Wrong Credentials. You have " + attempts + " attempts remaining.";
        } else {
            feedback.innerHTML = "System is now locked. You cannot enter your account.";
            document.getElementById("loginBtn").disabled = true;
            window.alert("Maximum login attempts reached. Your Access is denied.");
        }
    }
}

//The Image Profile Picture Code
function previewImage(event) {
const imageDisplay = document.getElementById('profileDisplay');
if (event.target.files && event.target.files[0]) {
imageDisplay.src = URL.createObjectURL(event.target.files[0]);
console.log("Profile picture updated successfully.");
    }
}