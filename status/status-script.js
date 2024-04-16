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
  {
    id: 2404141,
    nama: 'Laundry Joss',
    alamat: 'Jl. Mangga Hitam',
    estimatedDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    status: 'pickup',
    isPaid: false,
    totalPaid: 0,
    details: 'Laundry item 6',
  },
  {
    id: 2404143,
    nama: 'Laundry Mantab',
    alamat: 'Jl. Kedelai Malika',
    estimatedDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    status: 'queue',
    isPaid: false,
    totalPaid: 0,
    details: 'Laundry item 6',
  },
  {
    id: 2404147,
    nama: 'Laundry KelazZ',
    alamat: 'Komplek Merdeka',
    estimatedDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    status: 'on_process',
    isPaid: false,
    totalPaid: 0,
    details: 'Laundry item ',
  },
  {
    id: 2404140,
    nama: 'Laundry Pandita',
    alamat: 'Komplek Suka Suka',
    estimatedDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    status: 'ironed',
    isPaid: true,
    totalPaid: 0,
    details: 'Laundry item ',
  },
  {
    id: 2404140,
    nama: 'Laundry Kelas',
    alamat: 'Komplek Suka Suka',
    estimatedDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    status: 'ironed',
    isPaid: false,
    totalPaid: 0,
    details: 'Laundry item ',
  },
  {
    id: 2404141445,
    nama: 'Laundry Tronton',
    alamat: 'Jl. Apel I',
    estimatedDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    status: 'done',
    isPaid: false,
    totalPaid: 0,
    details: 'Laundry item 6',
  },
  {
    id: 2404141124,
    nama: 'Laundry Smart',
    alamat: 'Jl. Mandi 2',
    estimatedDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    status: 'done',
    isPaid: false,
    totalPaid: 0,
    details: 'Laundry item 6',
  },
  {
    id: 2404142234,
    nama: 'Laundry Menyala',
    alamat: 'Komplek Bangsanwan',
    estimatedDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    status: 'delivery',
    isPaid: false,
    totalPaid: 0,
    details: 'Laundry item 6',
  },
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

function displayLaundryItems(filter) {
  const filteredData = filterLaundryItems(filter);
  const laundryList = document.getElementById('laundry-list');
  laundryList.innerHTML = '';

  filteredData.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('col-md-12', 'prop-card', 'bg-custom');
    card.innerHTML = `
      <div class="card">
        <div class="status" data-content="${getStatus(
          item.status
        )}">${getStatus(item.status)}</div>
        <div class="card-body">
          <h5 class="card-title">ID: ${item.id}</h5>
          <p class="card-text">Nama Laundry: ${item.nama}</p>
          <p class="card-text">Alamat Laundry: ${item.alamat}</p>
          <p class="card-text">Estimated Date: ${item.estimatedDate.toLocaleDateString()}</p>
          <p class="card-text">Status Pembayaran: ${
            item.isPaid ? 'Sudah dibayar' : 'Belum dibayar'
          }</p>
          <p class="card-text">Total yang sudah dibayar: $${item.totalPaid}</p>
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
          ${
            !item.isPaid
              ? `<button class="btn-custom text-light btn-filter" onclick="handlePaymentButtonClick(${
                  item.id
                }, ${getPrice()})">Pay</button>`
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

function handlePaymentButtonClick(itemId) {
  // Hapus QR code sebelum membuat yang baru
  document.getElementById("qrcode").innerHTML = '';

  // Ambil data laundry berdasarkan itemId
  const laundry = laundryData.find(item => item.id === itemId);

  // Mendapatkan informasi unik berdasarkan data laundry
  const qrText = `Laundry ID: ${laundry.id}\nNama: ${laundry.nama}\nAlamat: ${laundry.alamat}\nTotal: $${getPriceForLaundry(laundry)}`;

  // Generate QR code dengan teks yang sesuai
  const qrCode = new QRCode(document.getElementById("qrcode"), {
      text: qrText,
      width: 200,
      height: 200
  });

  // Tampilkan Sweet Alert untuk informasi pembayaran
  Swal.fire({
      title: 'Payment Method',
      text: 'Scan the QR code below and pay to complete the laundry payment',
      imageUrl: qrCode._el.childNodes[0].toDataURL(), // Mengambil gambar dari QR code
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: 'OK'
  });
}


// Fungsi untuk mendapatkan harga berdasarkan data laundry
function getPriceForLaundry(laundry) {
  // Lakukan pengecekan, misalnya jika sudah dibayar maka ambil totalPaid, jika belum ambil harga acak
  return laundry.isPaid ? laundry.totalPaid : getPrice();
}

// "Done" btn
function handleDoneButtonClick(itemId) {
  // Gunakan Sweet Alert untuk menampilkan feedback
  Swal.fire({
    title: 'Laundry Completed',
    text: 'Laundry has been marked as completed!',
    icon: 'success',
    confirmButtonText: 'OK',
  }).then((result) => {
    if (result.isConfirmed) {
      // Tampilkan form feedback dan rating
      Swal.fire({
        title: 'Feedback & Rating',
        html: `
          <form id="feedbackForm">
            <div class="form-group">
              <label for="feedback">Feedback</label>
              <textarea class="form-control" id="feedback" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="rating">Rating</label>
              <div id="rating" class="rating">
                <span class="star" data-value="1">&#9733;</span>
                <span class="star" data-value="2">&#9733;</span>
                <span class="star" data-value="3">&#9733;</span>
                <span class="star" data-value="4">&#9733;</span>
                <span class="star" data-value="5">&#9733;</span>
              </div>
            </div>
          </form>
        `,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          const feedback = document.getElementById('feedback').value;
          const rating = document.querySelectorAll('.star.selected').length;
          // Di sini Anda bisa mengirimkan feedback dan rating ke server atau melakukan tindakan lain yang diperlukan
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              Swal.close(); // Menutup Sweet Alert setelah tindakan selesai
            }, 2000); // Simulasi pengiriman data ke server, ubah nilainya sesuai kebutuhan
          });
        },
      });

      // Tambahkan event listener untuk setiap bintang
      document.querySelectorAll('.star').forEach((star) => {
        star.addEventListener('click', function () {
          const value = parseInt(this.dataset.value);
          // Reset rating
          document.querySelectorAll('.star').forEach((s) => {
            s.classList.remove('selected');
          });
          // Tandai bintang yang dipilih dan yang sebelumnya
          for (let i = 1; i <= value; i++) {
            document
              .querySelector(`.star[data-value="${i}"]`)
              .classList.add('selected');
          }
        });
      });
    }
  });
}

function redirectHome() {
  window.location.href = '../home/home-index.html';
}
