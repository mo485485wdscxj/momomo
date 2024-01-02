 
const users = [];
function signIn(event) {
    event.preventDefault();
    const enteredEmail = document.getElementById('signin-email').value;
    const enteredPassword = document.getElementById('signin-password').value;

    let userFound = users.some(user => user.email === enteredEmail && user.password === enteredPassword);

    if (userFound) {
        alert('Login successful');
        window.location.href = 'file:///C:/Users/moemen.mahmoud/Desktop/momen%20wheleer%20(3)/momen_feadback.html';
    } else {
        alert('User not found or incorrect password');
    }
}

function strongPassword(password) {
    
    //jJJJ@#12bjhn#
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/.test(password);
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const age = document.getElementById('signup-age').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirmPassword').value;
    const phone = document.getElementById('signup-number').value;
    const gender = document.getElementById('signup-gender').value;

    if(phone.length !== 11)
    {
        alert('please enter 11 number in phone number ');
        return;
    }

    if (name.length < 8) {
        alert('Please enter a valid name (at least 8 characters)');
        return;
    }

    if (age < 18 ){
        alert('put age bigerr than 18');
        return;
    }
    if (age > 60 ){
        alert('put age smaller than 60');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }

    if (!strongPassword(password)) {
        alert('Please enter a strong password');
        return;
    }

    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match');
        return;
    }

     

    const newUser = { name, email, password, phone, age, gender };
    users.push(newUser);
    autoSignIn(email, password);
}

function autoSignIn(email, password) {
    let userFound = users.some(user => user.email === email && user.password === password);

    if (userFound) {
        alert('Account created successfully ');
    }
}

function resetPassword(event) {
    event.preventDefault();
    const resetEmail = document.getElementById('reset-email').value;
    const newPassword = document.getElementById('reset-new-password').value;

    // Find users array
    const userIndex = users.findIndex(user => user.email === resetEmail);

    if (userIndex !== -1) {
        if (!strongPassword(newPassword)) {
            alert('Please enter a strong password for the reset');
            return;
        }

        // new password
        users[userIndex].password = newPassword;

        alert('Password reset successful');
    
    } else {
        alert('Email not found. Please check your email and try again.');
    }
}
//to make change
function goToReset() {
    const signinContainer = document.getElementById('signin-container');
    const resetContainer = document.getElementById('reset-container');
    const signupContainer = document.getElementById('signup-container');

    signinContainer.classList.add('hidden');
    resetContainer.classList.remove('hidden');
    signupContainer.classList.add('hidden');
}

function goToSignIn() {
    const signinContainer = document.getElementById('signin-container');
    const resetContainer = document.getElementById('reset-container');
    const signupContainer = document.getElementById('signup-container');

    signinContainer.classList.remove('hidden');
    resetContainer.classList.add('hidden');
    signupContainer.classList.add('hidden');
}

function toggleForm() {
    const signinContainer = document.getElementById('signin-container');
    const signupContainer = document.getElementById('signup-container');
    const resetContainer = document.getElementById('reset-container');

    signinContainer.classList.toggle('hidden');
    signupContainer.classList.toggle('hidden');
    resetContainer.classList.add('hidden');
}
 