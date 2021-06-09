window.onscroll = () => {scrollFunction()};

function scrollFunction() {
  let header = document.getElementById("header");
  let scrollButton = document.getElementById("scroll-up-button");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    header.classList.add('header-color');
    scrollButton.style.display = 'block';
  } else {
    header.classList.remove('header-color');
    scrollButton.style.display = 'none';
  }
}