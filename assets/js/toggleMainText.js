const slides = document.querySelectorAll('.my-slide');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
}

slideInterval = setInterval(nextSlide, intervalTime);