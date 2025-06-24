// difficultySelection.js

document.addEventListener('DOMContentLoaded', () => {
  const prices = {
    beginner:     2500,
    intermediate: 3500,
    advanced:     4500
  };

  const priceTag = document.querySelector('.price-tag');
  const radios   = document.querySelectorAll('input[name="difficulty"]');
  const btnPay   = document.getElementById('paypal-btn');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const lvl    = radio.value;
      const amount = prices[lvl];
      priceTag.textContent = `$${amount.toLocaleString()} USD`;

      // — si tu souhaites passer le montant dans l'URL PayPal :
      // btnPay.href = `https://www.paypal.com/your-checkout-link?amount=${amount}`;
    });
  });
});
