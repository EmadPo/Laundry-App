// tombol close pada pop-up sign-in
var closeModalBtns = document.querySelectorAll('.close');

// modal sign-in
var signinModal = document.getElementById('signin');

// modal sign-up
var signUpModal = document.getElementById('signup');

// header sign in
var signInHeaderBtn = document.getElementById('signinHeader');

// membuka sign in header & navbar
signinBtn.addEventListener('click', function () {
  signinModal.style.display = 'block'; // Tampilkan modal sign-in
});
signInHeaderBtn.addEventListener('click', function () {
  signinModal.style.display = 'block'; // Tampilkan modal sign-in
});

document.addEventListener('DOMContentLoaded', function () {
  const signinModal = document.getElementById('signin');
  const signinFromSignup = document.getElementById('signinFromSignup');
  const togglePasswordSignIn = document.getElementById('togglePasswordSignIn');
  const toggleIconSignIn = document.getElementById('toggleIconSignIn');

  const signUpModal = document.getElementById('signup');
  const signupBtn = document.getElementById('signupBtn');
  const passwordInputSignUp = document.getElementById('passwordInputSignUp');
  const toggleIconSignUp = document.getElementById('toggleIconSignUp');
  const togglePasswordSignUp = document.getElementById('togglePasswordSignUp');

  const passwordInput = document.getElementById('password');
  const emailInputs = document.querySelectorAll('input');
  const passwordInputs = document.querySelectorAll('input[type="password"]');
  const usernameInputs = document.querySelectorAll('input[type="text"]');
  const phonenumberInputs = document.querySelectorAll('input[type="tel"]');
  const cityInputs = document.querySelectorAll('input');

  window.addEventListener('click', function (event) {
    // Periksa apakah klik terjadi di luar pop-up sign-in
    if (event.target === signinModal) {
      signinModal.classList.add('fade-out'); // Tambahkan class fade-out
      setTimeout(function () {
        signinModal.style.display = 'none'; // Sembunyikan pop-up sign-in setelah animasi fade-out selesai
        signinModal.classList.remove('fade-out'); // Hapus class fade-out
      }, 300); // Sesuaikan dengan durasi animasi fade-out (dalam milidetik)
    }

    // Periksa apakah klik terjadi di luar pop-up sign-up
    if (event.target === signUpModal) {
      signUpModal.classList.add('fade-out'); // Tambahkan class fade-out
      setTimeout(function () {
        signUpModal.style.display = 'none'; // Sembunyikan pop-up sign-up setelah animasi fade-out selesai
        signUpModal.classList.remove('fade-out'); // Hapus class fade-out
      }, 300); // Sesuaikan dengan durasi animasi fade-out (dalam milidetik)
    }
  });

  signupBtn.addEventListener('click', function () {
    signinModal.style.display = 'none';
    signUpModal.style.display = 'block';
  });

  signinFromSignup.addEventListener('click', function () {
    signUpModal.style.display = 'none';
    signinModal.style.display = 'block';
  });
  // icon sign in / up
  togglePasswordSignIn.addEventListener('click', function () {
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Ubah ikon berdasarkan tipe input
    toggleIconSignIn.classList.toggle('fa-eye-slash');
  });
  // icon sign up
  togglePasswordSignUp.addEventListener('click', function () {
    const type =
      passwordInputSignUp.getAttribute('type') === 'password'
        ? 'text'
        : 'password';
    passwordInputSignUp.setAttribute('type', type);

    // Ubah ikon berdasarkan tipe input
    toggleIconSignUp.classList.toggle('fa-eye-slash');
  });

  // Tambahkan event listener pada input teks untuk kedua formulir
  emailInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        input.style.fontWeight = '500';
        input.style.color = 'black';
      } else {
        input.style.fontWeight = 'normal';
        input.style.color = 'initial'; // Atur warna kembali ke default
      }
    });
  });

  passwordInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        input.style.fontWeight = '500';
        input.style.color = 'black';
      } else {
        input.style.fontWeight = 'normal';
        input.style.color = 'initial';
      }
    });
  });

  usernameInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        input.style.fontWeight = '500';
        input.style.color = 'black';
      } else {
        input.style.fontWeight = 'normal';
        input.style.color = 'initial';
      }
    });
  });

  cityInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        input.style.fontWeight = '500';
        input.style.color = 'black';
      } else {
        input.style.fontWeight = 'normal';
        input.style.color = 'initial';
      }
    });
  });

  phonenumberInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        input.style.fontWeight = '500';
        input.style.color = 'black';
      } else {
        input.style.fontWeight = 'normal';
        input.style.color = 'initial';
      }
    });
  });
});

// close
closeModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Tambahkan class 'fade-out' untuk memulai animasi fade-out
    signinModal.classList.add('fade-out');
    signUpModal.classList.add('fade-out');

    // Tunggu sampai animasi selesai sebelum menyembunyikan modal
    setTimeout(function () {
      signinModal.style.display = 'none'; // Sembunyikan pop-up sign-in
      signUpModal.style.display = 'none'; // Sembunyikan pop-up sign-up

      // Hapus class 'fade-out' setelah selesai untuk penggunaan selanjutnya
      signinModal.classList.remove('fade-out');
      signUpModal.classList.remove('fade-out');
    }, 300); // Sesuaikan dengan durasi animasi fade-out (dalam milidetik)
  });
});

// navbar
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
