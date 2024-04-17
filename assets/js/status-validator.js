document.addEventListener('DOMContentLoaded', function () {
  const editProfileForm = document.getElementById('editProfileForm');
  const editUsernameInput = document.getElementById('editUsername');
  const editEmailInput = document.getElementById('editEmail');
  const editPhoneInput = document.getElementById('editPhone');
  const editCityInput = document.getElementById('editCity');
  const previousUsername = 'John Doe';
  const previousEmail = 'john@example.com';
  const previousPhone = '081234567890';

  editProfileForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newUsername = editUsernameInput.value.trim();
    const newEmail = editEmailInput.value.trim();
    const newPhone = editPhoneInput.value.trim();
    const newCity = editCityInput.value.trim();

    // input username
    if (newUsername === '') {
      swalError('Username must be filled');
    } else if (!/^[a-zA-Z\s]+$/.test(newUsername)) {
      swalError(
        'Username must contain only letters and numbers without spaces or special characters!'
      );
    } else if (newUsername.length < 3) {
      swalError('Username must be at least 3 characters long');
    } else if (newUsername === previousUsername) {
      swalError('New username must be different from the previous one');
    }
    // input email address
    else if (newEmail === '') {
      swalError('Email address must be filled');
    } else if (!isValidEmail(newEmail)) {
      swalError(
        'Please enter a valid email address! for the example example@example.com'
      );
    } else if (newEmail === previousEmail) {
      swalError('New email address must be different from the previous one');
    }
    // input phone number
    else if (newPhone === '') {
      swalError('Phone number must be filled');
    } else if (!newPhone.startsWith('08')) {
      swalError('Phone number must start with 08');
    } else if (!/^\d+$/.test(newPhone)) {
      swalError('Phone number must contain only digits or number');
    } else if (newPhone === previousPhone) {
      swalError('New phone number must be different from the previous one');
    } else if (newPhone.length < 10 || newPhone.length > 13) {
      swalError('Phone number must be between 10 and 13 digits long');
    } else if (newCity === '') {
      swalError('City must be filled');
    } else if (!/^[a-zA-Z\s,]+$/.test(newCity)) {
      swalError('City must contain letters, spaces, and commas only');
    } else if ((newCity.match(/,/g) || []).length > 1) {
      swalError('City can only have one comma');
    } else {
      // Jika lolos validasi, Anda dapat melakukan pengiriman formulir di sini
      swalSuccess('Profile updated successfully');
    }
  });

  // Fungsi untuk memeriksa format email address
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Fungsi Sweet Alert untuk pesan error
  function swalError(message) {
    Swal.fire({
      icon: 'error',
      title: 'Validation Error',
      text: message,
    });
  }

  // Fungsi Sweet Alert untuk pesan sukses
  function swalSuccess(message) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      // Jika diperlukan, Anda dapat melakukan redirect atau tindakan lain setelah menutup Sweet Alert
      $('#editProfileModal').modal('hide'); // Menutup modal edit profile setelah sukses
    });
  }

  const cancelButton = document.querySelector(
    '#logoutModal .modal-footer .btn-custom'
  );
  
  // Tambahkan event listener untuk menangani klik pada tombol "Cancel"
  cancelButton.addEventListener('click', function () {
    // Tutup modal logout
    $('#logoutModal').modal('hide');
    // Buka kembali modal profil
    $('#profileModal').modal('show');
  });
});
