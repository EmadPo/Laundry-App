document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
  
    emailInput.addEventListener('invalid', function (event) {
      event.preventDefault(); // Menghentikan perilaku default browser
  
      // Menampilkan pesan kesalahan SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Make sure you enter a valid email address. Example: example@example.com',
      });
    });
  
    const signupForm = document.getElementById('signupForm');
  
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('username').value.trim();
      const email = emailInput.value.trim();
  
      // Validasi username
      if (username === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please input your username',
        });
        return;
      }
      const usernameRegex = /^[a-zA-Z0-9]*$/;
      if (!usernameRegex.test(username)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username can only contain letters and numbers',
        });
        return;
      }
  
      // Validasi email menggunakan regex
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Make sure you enter a valid email address. Example: example@example.com',
        });
        return;
      }
  
      // Jika semua validasi berhasil, form akan disubmit
      signupForm.submit();
    });
  });
  