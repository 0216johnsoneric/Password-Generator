var generateBtn = document.querySelector("#generate");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_|}{[]:;?><,./-=+~`";
const pwLength = "";

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    userPassword = "";
    passwordCharacters = "";

    // ask user the length of password
    let pwLength = prompt(
        "Please select the length of your password. (Between 8 - 128 characters)"
    );

    // check if password between 8 and 20 characters
    if (pwLength >= 8 && pwLength <= 128) {
        password.length = pwLength;

        // does user want lowercase letters
        var isLowercase = confirm("Include lowercase letters in password?");
        // does user want uppercase letters
        var isUppercase = confirm("Include uppercase letters in password?");
        // does user want numbers
        var isNumeric = confirm("Include numbers in password?");
        // does user want special characters
        var hasSpecialChars = confirm("Include sepcial characters in password?");
    } else {
        alert("Please select a password between 8-128 characters");
    }

    // CONDITIONALS STATEMENTS
    if (isLowercase) {
        passwordCharacters += lowercase;
    }
    if (isUppercase) {
        passwordCharacters += uppercase;
    }
    if (isNumeric) {
        passwordCharacters += numbers;
    }
    if (hasSpecialChars) {
        passwordCharacters += specialCharacters;
    } else {
        alert("Error: Cannot generate a password!");
    }
    for (var i = 0; i < pwLength; i++) {
        userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
    // console.log(userPassword);
    return userPassword;
}
// event listener for generate button
generateBtn.addEventListener("click", writePassword);
