// transparent navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled');
  }
}

// slider
$(document).ready(function () {
  const testimonial = $('.testimonial');

  testimonial.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000, //ms
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

// navbar on scroll
$(document).ready(function () {
  // Ketika tombol "Blog" diklik
  $("a[href='#blog']").click(function () {
    // Mendapatkan posisi vertikal dari bagian "Provides Convenience in Laundry"
    var targetOffset = $('.body-prop').offset().top;

    // Menganimasikan scroll ke posisi tersebut
    $('html, body').animate(
      {
        scrollTop: targetOffset,
      },
      1000
    );
  });
});

// sign in
document.getElementById('signinBtn').addEventListener('click', function () {
  fadeIn(document.getElementById('loginModal')); // Menampilkan pop-up dengan animasi fade
});

document.querySelector('.close').addEventListener('click', function () {
  fadeOut(document.getElementById('loginModal')); // Menyembunyikan pop-up dengan animasi fade
});

// menampilkan pop-up dengan animasi fade
function fadeIn(element) {
  element.style.display = 'block';
  setTimeout(function () {
    element.style.opacity = '1';
  }, 10); // Menetapkan opacity setelah sedikit delay agar animasi berjalan
}

// menyembunyikan pop-up dengan animasi fade
function fadeOut(element) {
  element.style.opacity = '0';
  setTimeout(function () {
    element.style.display = 'none';
  }, 300); // Menyembunyikan pop-up setelah animasi fade selesai
}

document.getElementById('signupBtn').addEventListener('click', function () {
  fadeIn(document.getElementById('registerModal')); // Show register modal with fade animation
});

// menyembunyikan register modal
document
  .querySelector('#registerModal .close')
  .addEventListener('click', function () {
    fadeOut(document.getElementById('registerModal')); // Hide register modal with fade animation
  });

document.getElementById('signupBtn').addEventListener('click', function () {
  fadeOut(document.getElementById('loginModal')); // Hide sign in modal with fade animation
  fadeIn(document.getElementById('registerModal')); // Show sign up modal with fade animation
});

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('registerModal')) {
    fadeOut(document.getElementById('registerModal')); // Hide sign up modal if clicked outside with fade animation
  }
});

document
  .getElementById('signinFromSignup')
  .addEventListener('click', function () {
    fadeOut(document.getElementById('registerModal')); // Hide sign up modal with fade animation
    fadeIn(document.getElementById('loginModal')); // Show sign in modal with fade animation
  });

// scroll to section
function scrollToFooter() {
  var footer = document.getElementById('footer');
  footer.scrollIntoView({ behavior: 'smooth' });
}

// direct
function redirectHome() {
  window.location.href = '../home/home-index.html';
}
function redirectPartner() {
  window.location.href = '../partner/partner-index.html';
}
