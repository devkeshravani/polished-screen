// A small prototype: validation, availability, confirmation, and recovery.
const form = document.querySelector('#cart-form');
const size = document.querySelector('#size');
const status = document.querySelector('#cart-status');
const resetButton = document.querySelector('#reset-cart');
let itemCount = 0;

function announce(message, state) {
  status.textContent = message;
  status.dataset.state = state;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!size.value) {
    size.setAttribute('aria-invalid', 'true');
    size.setAttribute('aria-describedby', 'cart-status');
    announce('Choose a size before adding the tee. Your cart has not changed.', 'error');
    size.focus();
    return;
  }
  if (size.value === 'Large') {
    size.setAttribute('aria-invalid', 'true');
    size.setAttribute('aria-describedby', 'cart-status');
    announce('Large is sold out. Choose Small or Medium instead. Your cart has not changed.', 'error');
    size.focus();
    return;
  }
  size.removeAttribute('aria-invalid');
  size.removeAttribute('aria-describedby');
  itemCount += 1;
  announce(`${size.value} tee added. Sample cart: ${itemCount} ${itemCount === 1 ? 'item' : 'items'}. Total: $${itemCount * 28}.`, 'success');
  resetButton.hidden = false;
});

size.addEventListener('change', () => {
  size.removeAttribute('aria-invalid');
  size.removeAttribute('aria-describedby');
});

resetButton.addEventListener('click', () => {
  itemCount = 0;
  form.reset();
  size.removeAttribute('aria-invalid');
  size.removeAttribute('aria-describedby');
  announce('Sample cart cleared. Choose a size to start again.', 'neutral');
  size.focus();
  resetButton.hidden = true;
});
