const currencyToggle = document.getElementById('currencyToggle');
const basicPlanPrice = document.getElementById('Lite');
const standardPlanPrice = document.getElementById('Pro');
const premiumPlanPrice = document.getElementById('Premium');

currencyToggle.addEventListener('change', () => {
    if (currencyToggle.checked) {
      basicPlanPrice.textContent = 'Price: ₹1425';
      standardPlanPrice.textContent = 'Price: ₹2925';
      premiumPlanPrice.textContent = 'Price: ₹5175';
    } else {
      basicPlanPrice.textContent = 'Price: $19';
      standardPlanPrice.textContent = 'Price: $39';
      premiumPlanPrice.textContent = 'Price: $69';
    }
});
