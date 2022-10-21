

// define validate form function
function validateForm() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('user_email').value;
    let errorMsg = document.getElementById('error')
    let password1 = document.getElementById('user_password').value;
    let password2 = document.getElementById('user_confirm_password').value;

    // check required fields
    if (firstName === '' || lastName === '' || email === '' || password1 === '' || password2 === '') {
        errorMsg.innerHTML = '<p>Please fill out all required fields</p>';
        errorMsg.style.display = 'inline';
    } else {

        // if the passwords match, continue
        if (password1 === password2) {
            errorMsg.style.display = 'none';
            document.getElementById('my-form').submit();

        } else {
            console.log('Passwords do not match');
            errorMsg.innerHTML = '<p>* Passwords do not match</p>'
            errorMsg.style.display = 'inline';
        }
    }
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    // get submit button
    let submitButton = document.getElementById('submit-btn');
    // add event listener to submit button
    submitButton.addEventListener('click', validateForm);
});
 




