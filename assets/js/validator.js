document.addEventListener('DOMContentLoaded', function () {
  const signinForm = document.getElementById('signinForm');

  signinForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validasi apakah email kosong
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email must be filled in',
      });
      return;
    }

    // Validasi apakah password kosong
    if (!password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be filled in',
      });
      return;
    }

    // Validasi panjang password dan karakter khusus
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
      });
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Make sure you enter a valid email address. Example: example@example.com',
      });
      return;
    }

    // Jika semua validasi berhasil, form akan disubmit
    signinForm.submit();

    window.location.href = '../home/home-index.html';
  });
});
