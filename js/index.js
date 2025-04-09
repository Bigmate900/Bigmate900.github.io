// disable f12 

//document.addEventListener('contextmenu', (e) => e.preventDefault());

//function ctrlShiftKey(e, keyCode) {
//return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
//}

//document.onkeydown = (e) => {
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//if (
 //   event.keyCode === 123 ||
 //   ctrlShiftKey(e, 'I') ||
 //   ctrlShiftKey(e, 'J') ||
 //   ctrlShiftKey(e, 'C') ||
 //   (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//)
 //   return false;
//};


// progressbar

const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progressBar.style.transform = `scaleX(${progress / 100})`;
});

// effect

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });


// scroll button

  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
