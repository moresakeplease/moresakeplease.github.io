window.addEventListener('load', () => {
    const h1 = document.querySelector('.slide-in');
    h1.classList.add('show');
});

window.addEventListener('load', () => {
    const images = document.querySelectorAll('.slide-in-link');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
        }, index * 240); // Stagger the animation for each image
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const skillLists = document.querySelectorAll('.skills-card ul');
  skillLists.forEach(ul => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ul.querySelectorAll('li').forEach((li, idx) => {
            setTimeout(() => {
              li.classList.add('visible');
            }, idx * 240); // 240ms stagger
          });
        }
      });
    }, { threshold: 0.2 });
    observer.observe(ul);
  });
});
