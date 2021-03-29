window.onscroll = () => {scrollFunction()};

function scrollFunction() {
  var header = document.getElementById("header");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    header.classList.add('header-color');
  } else {
    header.classList.remove('header-color');
  }
}