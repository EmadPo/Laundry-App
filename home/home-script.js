// profile
document.getElementById('profileButton').addEventListener('click', function () {
  $('#profileModal').modal('show'); // Show profile modal
});

// logout
document.getElementById('logoutButton').addEventListener('click', function () {
  $('#logoutModal').modal('show'); // Show logout confirmation modal
});

// edit
const editProfileButton = document.getElementById('editButton');
editProfileButton.addEventListener('click', function () {
  // Sembunyikan modal profil
  $('#profileModal').modal('hide');
  // Tampilkan modal edit
  $('#editProfileModal').modal('show');
});

// close
const closeButtons = document.querySelectorAll('.modal .close');
closeButtons.forEach((button) => {
  button.addEventListener('click', function () {
    // Dapatkan modal yang terkait dengan tombol close
    const modal = button.closest('.modal');
    // Sembunyikan modal
    $(modal).modal('hide');
  });
});

document
  .getElementById('logoutModal')
  .addEventListener('hide.bs.modal', function () {
    $('#profileModal').modal('show'); // Menampilkan kembali modal sebelumnya
  });

// konfirm logout
document
  .getElementById('confirmLogoutButton')
  .addEventListener('click', function () {
    window.location.href = '../index.html';
  });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function redirectStatusLaundry() {
  window.location.href = '../status/status-index.html';
}
