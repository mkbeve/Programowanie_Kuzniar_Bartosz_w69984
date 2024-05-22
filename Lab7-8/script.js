function validateNotEmpty(field, fieldName) {
    if (field.value.trim() === '') {
        field.setCustomValidity(fieldName + ' jest wymagane.');
        return false;
    } else {
        field.setCustomValidity('');
        return true;
    }
}

function validateLength(field, fieldName, minLength) {
    if (field.value.length < minLength) {
        field.setCustomValidity(fieldName + ' powinno zawierać co najmniej ' + minLength + ' znaków.');
        return false;
    } else {
        field.setCustomValidity('');
        return true;
    }
}

function validateEmail(field) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(field.value)) {
        field.setCustomValidity('Wprowadź poprawny adres email.');
        return false;
    } else {
        field.setCustomValidity('');
        return true;
    }
}

function validatePasswordComplexity(passwordField) {
    const password = passwordField.value;
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        passwordField.setCustomValidity('Hasło powinno zawierać co najmniej 8 znaków, jedną dużą literę, jedną małą literę i jedną cyfrę.');
        return false;
    } else {
        passwordField.setCustomValidity('');
        return true;
    }
}

function validateDateOfBirth(dateField) {
    const today = new Date();
    const birthDate = new Date(dateField.value);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
        dateField.setCustomValidity('Musisz być pełnoletni, aby wypełnić formularz.');
        return false;
    } else {
        dateField.setCustomValidity('');
        return true;
    }
}

function validatePasswordMatch(passwordField, confirmPasswordField) {
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity('Hasła nie pasują do siebie.');
        return false;
    } else {
        confirmPasswordField.setCustomValidity('');
        return true;
    }
}

function validateForm() {
    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const genderField = document.getElementById('gender');
    const phoneField = document.getElementById('phone');
    const birthdateField = document.getElementById('birthdate');
    const countryField = document.getElementById('country');
    const confirmPasswordField = document.getElementById('confirmPassword');

    const errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = '';

    const isValidFirstName = validateNotEmpty(firstNameField, 'Imię');
    const isValidLastName = validateNotEmpty(lastNameField, 'Nazwisko');
    const isValidEmail = validateEmail(emailField);
    const isValidPassword = validateLength(passwordField, 'Hasło', 8) && validatePasswordComplexity(passwordField);
    const isValidGender = validateNotEmpty(genderField, 'Płeć');
    const isValidPhone = validateNotEmpty(phoneField, 'Telefon');
    const isValidBirthdate = validateNotEmpty(birthdateField, 'Data urodzenia') && validateDateOfBirth(birthdateField);
    const isValidCountry = validateNotEmpty(countryField, 'Kraj');
    const isValidConfirmPassword = validatePasswordMatch(passwordField, confirmPasswordField);

    return isValidFirstName && isValidLastName && isValidEmail && isValidPassword && isValidGender && isValidPhone && isValidBirthdate && isValidCountry && isValidConfirmPassword;
}

const sameAddressCheckbox = document.getElementById('sameAddress');
const correspondenceLabel = document.getElementById('correspondenceLabel');
const correspondenceAddressField = document.getElementById('correspondenceAddress');

sameAddressCheckbox.addEventListener('change', function() {
    if (this.checked) {
        correspondenceAddressField.disabled = true;
        correspondenceAddressField.hidden = true;
    } else {
        correspondenceAddressField.disabled = false;
        correspondenceAddressField.hidden = false;
    }
});

const countryField = document.getElementById('country');
const provinceField = document.getElementById('province');

countryField.addEventListener('change', function() {
    if (this.value === 'Polska') {
        provinceField.innerHTML = ''; // Clear previous options
        // Add options for provinces in Poland
        // Example: provinceField.innerHTML = '<option value="dolnośląskie">Dolnośląskie</option><option value="małopolskie">Małopolskie</option>';
        provinceField.disabled = false;
    }})