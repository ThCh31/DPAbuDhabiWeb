document.addEventListener('DOMContentLoaded', () => {
  fetchNavbar()
    .then(initHamburgerDropdown)
    .catch(err => console.error('Navbar load failed:', err));
});

async function fetchNavbar() {
  const resp = await fetch('/navbar.html');
  if (!resp.ok) throw new Error(resp.status);
  document.getElementById('site-navbar').innerHTML = await resp.text();
}

function initHamburgerDropdown() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const btn = dropdown.querySelector('.hamburger');

    btn.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', e => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });
}
