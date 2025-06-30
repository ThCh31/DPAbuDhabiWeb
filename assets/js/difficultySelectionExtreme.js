document.addEventListener('DOMContentLoaded', () => {
  const prices = {
    beginner:     2099,
    intermediate: 2199,
    advanced:     2399
  };

  const priceTag  = document.querySelector('.price-tag');
  const radios    = document.querySelectorAll('input[name="difficulty"]');
  const btnPay    = document.getElementById('paypal-btn');
  const descItems = document.querySelectorAll('.level-description__item');

  function updateDescription(lvl) {
    descItems.forEach(el =>
      el.classList.toggle('active', el.dataset.level === lvl)
    );
  }

  // initialisation
  const initLevel = document.querySelector('input[name="difficulty"]:checked').value;
  updateDescription(initLevel);

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const lvl    = radio.value;
      const amount = prices[lvl];
      priceTag.textContent = `${amount.toLocaleString()} €`;
      // btnPay.href = `...checkout-link?amount=${amount}`;

      updateDescription(lvl);
    });
  });
});
