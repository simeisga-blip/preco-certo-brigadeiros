'use strict';
(() => {
  const config = window.OFERTA_CONFIG || {};
  let checkout;
  try {
    const url = new URL(config.checkoutUrl);
    if (url.protocol === 'https:' && !url.username && !url.password) checkout = url.href;
  } catch {}
  if (checkout) {
    document.querySelectorAll('.purchase').forEach(button => {
      button.disabled = false;
      button.addEventListener('click', () => { window.location.assign(checkout); });
    });
    document.querySelectorAll('.checkout-status').forEach(el => {
      el.textContent = 'Você será direcionado ao checkout da GREENN.';
    });
  }
  const support = document.querySelector('#support-link');
  if (support && typeof config.supportEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.supportEmail)) {
    support.href = 'mailto:' + config.supportEmail;
    support.hidden = false;
  }
})();
