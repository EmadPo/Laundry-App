// ngeload filter all
function initializePage() {
  const initialFilter = 'all';
  displayLaundryItems(initialFilter);
}

window.onload = initializePage;

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
const laundryData = [
  { id: 1, status: 'pickup', details: 'Laundry item 6' },
  { id: 2, status: 'queue', details: 'Laundry item 1' },
  { id: 3, status: 'on_process', details: 'Laundry item 2' },
  { id: 4, status: 'done', details: 'Laundry item 3' },
  { id: 5, status: 'ironed', details: 'Laundry item 4' },
  { id: 6, status: 'delivery', details: 'Laundry item 5' },
  { id: 7, status: 'queue', details: 'Laundry item 6' },
  { id: 8, status: 'pickup', details: 'Laundry item 6' },
];

// Function to filter laundry items
function filterLaundryItems(filter) {
  if (filter === 'all_pickup') {
    return laundryData;
  } else {
    return laundryData.filter((item) => item.status === filter);
  }
}

// Function to display laundry items
function displayLaundryItems(filter) {
  const filteredData = filterLaundryItems(filter);
  const laundryList = document.getElementById('laundry-list');
  laundryList.innerHTML = '';

  filteredData.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('col-md-4');
    card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">ID: ${item.id}</h5>
            <p class="card-text">${item.details}</p>
            ${
              item.status === 'delivery'
                ? `<button class="btn-custom text-light btn-filter" onclick="handleDoneButtonClick(${item.id})">Done</button>`
                : ''
            }
          </div>
        </div>
      `;
    laundryList.appendChild(card);
  });
}

// Initial display of laundry items (All Pickup)
displayLaundryItems('all_pickup');

// Event listener for filter buttons
document.querySelectorAll('.btn-filter').forEach((button) => {
  button.addEventListener('click', function () {
    const filter = this.getAttribute('data-filter');
    displayLaundryItems(filter);
  });
});

// Function to filter laundry items
function filterLaundryItems(filter) {
  if (filter === 'all') {
    return laundryData;
  } else {
    return laundryData.filter((item) => item.status === filter);
  }
}

// Function to handle "Done" button click
function handleDoneButtonClick(itemId) {
  const confirmDelivery = confirm('Have you received your clothes?');
  if (confirmDelivery) {
    const isSatisfied = confirm('Are you satisfied with our service?');
    if (isSatisfied) {
      // Open feedback form pop-up
      $('#feedbackModal').modal('show');
    } else {
      window.location.href = 'customer_support.php';
    }
  } else {
  }
}

function redirectHome() {
  window.location.href = '../home/home-index.html';
}
