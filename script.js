document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.Header');
  const logo = document.querySelector('.logo img'); // Select the logo

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      header.classList.add('scrolled');


    } else {
      header.classList.remove('scrolled');
    }
  });
});
