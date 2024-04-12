var signinBtn = document.getElementById('signinBtn');
var signinModal = document.getElementById('signin');
var signUpBtn = document.getElementById('signupBtn');
var signUpModal = document.getElementById('signup');
var closeModalBtns = document.querySelectorAll('.close');
var signInFromSignUpBtn = document.getElementById('signinFromSignup');
var createAccountBtn = document.getElementById('createAccountBtn');

// Transparent navbar and handleModal function
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById('navbar');
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function handleModal(btn, modal) {
  btn.addEventListener('click', function () {
    modal.style.display = 'block';
    // Tambahkan event listener khusus untuk tombol sign up
    signUpBtn.removeEventListener('click', closeSigninModal);
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      // Hapus event listener setelah pop-up ditutup
      signUpBtn.addEventListener('click', closeSigninModal);
    }
  });
}

// Tambahkan event listener pada tombol sign pada pop up sign up
// Temukan tombol sign in di pop up sign up


// Tambahkan event listener pada tombol sign in di pop up sign up
signInFromSignUpBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah default behavior dari link

  // Terapkan kelas fade-out pada pop up sign up
  signUpModal.classList.add('fade-out');

  // Tunggu sampai animasi fade-out selesai
  setTimeout(function () {
    // Sembunyikan pop up sign up
    signUpModal.style.display = 'none';

    // Tampilkan pop up sign in
    signinModal.style.display = 'block';
  }, 500); // Sesuaikan dengan durasi animasi, dalam kasus ini 0.5 detik (500 milidetik)
});

// Temukan elemen tombol sign in pada header
var signinHeaderBtn = document.getElementById('signinHeaderBtn'); // Ganti 'signinHeaderBtn' dengan id yang sesuai dengan tombol sign in pada header

// Tambahkan event listener pada tombol sign in pada header
signinHeaderBtn.addEventListener('click', function () {
  // Saat tombol sign in pada header diklik, tampilkan pop up sign in
  signinModal.style.display = 'block';
});

// Function untuk menutup pop-up sign in
function closeSigninModal(event) {
  event.preventDefault();
  signinModal.style.display = 'none';
}

// Panggil fungsi handleModal
handleModal(signinBtn, signinModal);
handleModal(signUpBtn, signUpModal);

// Close modals
closeModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Sembunyikan semua modal
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function (modal) {
      modal.style.display = 'none';
    });
  });
});

// Tambahkan event listener untuk menampilkan notifikasi saat tombol diklik
createAccountBtn.addEventListener('click', function () {
  // Tampilkan notifikasi menggunakan SweetAlert2
  Swal.fire({
    icon: 'success',
    title: 'Akun berhasil dibuat!',
    text: 'Silakan login kembali untuk mengakses akun Anda.',
    showCancelButton: false,
    confirmButtonText: 'OK',
  }).then((result) => {
    // Setelah tombol "OK" ditekan, arahkan ke pop up sign in
    if (result.isConfirmed) {
      // Langsung arahkan ke pop up sign in setelah menutup notifikasi
      signinModal.style.display = 'block';
      // Sembunyikan pop up sign up
      signUpModal.style.display = 'none';
    }
  });
});

// slider
$(document).ready(function () {
  $('.testimonial').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// scroll to section
function scrollToFooter() {
  var footer = document.getElementById('footer');
  footer.scrollIntoView({ behavior: 'smooth' });
}
function scrollToBlog() {
  var blog = document.getElementById('blog');
  blog.scrollIntoView({ behavior: 'smooth' });
}

// direct
function redirectHome() {
  window.location.href = '../home/home-index.html';
}
function redirectPartner() {
  window.location.href = '../partner/partner-index.html';
}
