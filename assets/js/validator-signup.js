document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // username tidak boleh kosong
    const usernameInput = document.getElementById('username');
    const usernameValue = usernameInput.value.trim();
    if (usernameValue === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username must be filled in!',
      });
      return;
    }
    // username (hanya huruf dan angka tanpa spasi tidak boleh spesial)
    const usernameTrimmed = usernameValue.trim();
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(usernameTrimmed)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username must contain only letters and numbers without spaces or special characters!',
      });
      return;
    }

    // email tidak boleh kosong dan harus valid
    const emailInput = document.getElementById('emailInputSignUp');
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email must be filled in!',
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address! for the example example@example.com',
      });
      return;
    }

    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^08[0-9]{8,11}$/;
    if (phoneValue === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Phone number must be filled in!',
      });
      return;
    }
    if (!phoneRegex.test(phoneValue)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid Indonesian phone number! It should start with 08 and have 10-13 digits.',
      });
      return;
    }

    const cityInput = document.getElementById('city');
    const cityValue = cityInput.value.trim();
    if (cityValue === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'City must be filled in!',
      });
      return;
    }
    // Spesifik validasi untuk city, misalnya hanya huruf dan spasi diizinkan
    const cityRegex = /^[a-zA-Z\s]+$/;
    if (!cityRegex.test(cityValue)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'City name can only contain letters and spaces!',
      });
      return;
    }

    // password tidak boleh kosong
    const passwordInput = document.getElementById('passwordInputSignUp');
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be filled in!',
      });
      return;
    }

    // minimal 6 karakter
    if (passwordValue.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be at least 6 characters long!',
      });
      return;
    }

    // harus ada lowercase, uppercase, dan spesial karakter
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (
      !lowercaseRegex.test(passwordValue) ||
      !uppercaseRegex.test(passwordValue) ||
      !specialCharRegex.test(passwordValue)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must contain at least one lowercase letter, one uppercase letter, and one special character!',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Account created successfully. Log in with your new account.',
    }).then((result) => {
      // Check if the user clicked OK (result.isConfirmed)
      if (result.isConfirmed) {
        // Hide the sign-up popup
        signUpModal.style.display = 'none';
        // Show the sign-in popup
        signinModal.style.display = 'block';
      }
    });
  });
});
