// Simple helper to set "active" nav link based on current page
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-nav]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();

