import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.scss'; // Import your Sass file

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-button');

  accordionHeaders.forEach(function (header, index) {
      header.addEventListener('keydown', function (event) {
          if (event.key === 'ArrowDown') {
              event.preventDefault(); // Prevent default scroll
              if (index < accordionHeaders.length - 1) {
                  accordionHeaders[index + 1].focus();
              }
          } else if (event.key === 'ArrowUp') {
              event.preventDefault(); // Prevent default scroll
              if (index > 0) {
                  accordionHeaders[index - 1].focus();
              }
          }
      });
  });
});