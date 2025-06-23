document.addEventListener('DOMContentLoaded', () => {

  // callback commun pour faire apparaître un élément et le désinscrire
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  // 1) Observer pour le fade-in des .section-anim et .hero-text
  const fadeObserver = new IntersectionObserver(handleIntersect, {
    threshold: 0.1
  });
  document
    .querySelectorAll('.section-anim, .hero-text')
    .forEach(el => fadeObserver.observe(el));

  // 2) Observer pour le slide-in depuis la gauche/droite
  const slideObserver = new IntersectionObserver(handleIntersect, {
    threshold: 0.2
  });
  document
    .querySelectorAll('.section-in-left, .section-in-right')
    .forEach(el => slideObserver.observe(el));

});


// ── MENU HAMBURGER ──
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const btn       = dropdown.querySelector('.hamburger');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  // fermer si on clique ailleurs
  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

// ─── Centrage vs scrollable ───
function updateExperienceScroll() {
  const container = document.querySelector('.experience-cards');
  if (!container) return;
  if (container.scrollWidth > container.clientWidth) {
    container.classList.add('scrollable');
  } else {
    container.classList.remove('scrollable');
  }
}

// on fait le check au load et au resize
window.addEventListener('load',  updateExperienceScroll);
window.addEventListener('resize', updateExperienceScroll);


document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.experience-cards .card');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1) Toggle active
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 2) Afficher/Masquer
      const key = btn.dataset.filter;
      cards.forEach(card => {
        if (key === 'all' || card.classList.contains(key)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // 3) Recalculer l’état scrollable vs centré
      updateExperienceScroll();
    });
  });
});

// … votre code existant …

// ↓ en bas de homePageAnimation.js, juste avant la dernière accolade :
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {           // seuil de 30px (ajustable)
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

