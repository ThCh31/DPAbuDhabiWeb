document.addEventListener('DOMContentLoaded', () => {
  const prices = {
    beginner:     2500,
    intermediate: 3500,
    advanced:     4500
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
      priceTag.textContent = `$${amount.toLocaleString()} USD`;
      // btnPay.href = `...checkout-link?amount=${amount}`;

      updateDescription(lvl);
    });
  });
});
