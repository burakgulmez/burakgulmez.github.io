document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.menu-item a').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.animation = 'none';
      item.offsetHeight; // Trigger reflow
      item.style.animation = null;
    });

    item.addEventListener('click', function(e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
