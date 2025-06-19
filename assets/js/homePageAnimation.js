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
