/* === LOADER === */
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hide');
  }
  window.scrollTo(0, 0);
});

/* === SCROLL TOP === */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
  });
} else {
  window.scrollTo(0, 0);
}

/* === FADE IN === */
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));