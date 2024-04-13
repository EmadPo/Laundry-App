// profile
document.getElementById('profileButton').addEventListener('click', function () {
  $('#profileModal').modal('show'); // Show profile modal
});

// logout
document.getElementById('logoutButton').addEventListener('click', function () {
  $('#logoutModal').modal('show'); // Show logout confirmation modal
});

// konfirm logout
document
  .getElementById('confirmLogoutButton')
  .addEventListener('click', function () {
    window.location.href = '../index.html';
  });

// data
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

// filter
// ngeload filter all
function initializePage() {
  const initialFilter = 'all';
  displayLaundryItems(initialFilter);
}
window.onload = initializePage;

// Function to filter laundry items
function filterLaundryItems(filter) {
  if (filter === 'all') {
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
    card.classList.add('col-md-12','prop-card');
    card.innerHTML = `
      <div class="card">
      <div class="status">${getStatus(item.status)}</div>
        <div class="card-body">
          <h5 class="card-title">ID: ${item.id}</h5>
          <p class="card-text">Date Created: ${getFormattedDate()}</p>
          <p class="card-text">Estimated Date: ${getEstimatedDate()}</p>
          <p class="card-text">Price: $${getPrice()}</p>
          ${
            item.status === 'delivery'
              ? `<p>Confirm receipt after you've checked the received items</p>`
              : ''
          }
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

// Function to get formatted date
function getFormattedDate() {
  const currentDate = new Date();
  return currentDate.toLocaleDateString();
}

// Function to get estimated date
function getEstimatedDate() {
  const currentDate = new Date();
  const estimatedDate = new Date(
    currentDate.getTime() + 3 * 24 * 60 * 60 * 1000
  ); // Adding 3 days
  return estimatedDate.toLocaleDateString();
}

// Function to get price
function getPrice() {
  return Math.floor(Math.random() * 100) + 50; // Random price between 50 to 150
}

// Function to get status
function getStatus(status) {
  switch (status) {
    case 'pickup':
      return 'Pickup';
    case 'queue':
      return 'Queue';
    case 'on_process':
      return 'On Process';
    case 'done':
      return 'Done';
    case 'ironed':
      return 'Ironed';
    case 'delivery':
      return 'Delivery';
    default:
      return '';
  }
}

// filter btn active
document.querySelectorAll('.btn-filter').forEach((button) => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.btn-filter').forEach((btn) => {
      btn.classList.remove('active');
    });
    this.classList.add('active');

    const filter = this.getAttribute('data-filter');
    displayLaundryItems(filter);
  });
});

// "Done" btn
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
