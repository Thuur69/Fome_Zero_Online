function updateCestasBasicas() {
    const donationAmountElement = document.getElementById('donation-amount');
    const donationAmount = parseFloat(donationAmountElement.value);
    const customDonationAmount = document.getElementById('custom-donation-amount').value;
    const cestasBasicasElement = document.getElementById('cestas-basicas');

    if (!isNaN(donationAmount)) {
        donationAmountElement.value = customDonationAmount;
    }

    if (!isNaN(customDonationAmount) && customDonationAmount >= 15) {
        const cestasBasicas = Math.floor(customDonationAmount / 15);
        cestasBasicasElement.textContent = `Você está doando ${cestasBasicas} cestas básicas.`;
    } else {
        cestasBasicasElement.textContent = '';
    }
}
const donationAmountSelect = document.getElementById('donation-amount');
const customDonationAmountInput = document.getElementById('custom-donation-amount');

donationAmountSelect.addEventListener('change', function () {
    if (donationAmountSelect.value === 'custom') {
        customDonationAmountInput.style.display = 'block';
        customDonationAmountInput.focus();
    } else {
        customDonationAmountInput.style.display = 'none';
    }
});