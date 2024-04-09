// JavaScript to handle edit button click
document.getElementById('profileButton').addEventListener('click', function () {
  $('#profileModal').modal('show'); // Show profile modal
});

// JavaScript to handle logout button click
document.getElementById('logoutButton').addEventListener('click', function () {
  $('#logoutModal').modal('show'); // Show logout confirmation modal
});

// JavaScript to handle logout confirmation button click
document
  .getElementById('confirmLogoutButton')
  .addEventListener('click', function () {
    // Perform logout action
    // For example: Redirect to logout page
    window.location.href = '../index.html'; // Change the URL to your logout script
  });

function redirectStatusLaundry() {
  window.location.href = '../status/status-index.html';
}
