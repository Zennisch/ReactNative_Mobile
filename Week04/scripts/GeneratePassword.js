function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    let password = "";
    let characters = "";
    if (includeLowerCase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUpperCase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
        characters += "0123456789";
    }
    if (includeSymbols) {
        characters += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

let password = generatePassword(12, true, true, true, true);
console.log(password);