document.querySelectorAll('.clickable-flower').forEach(flower => {
  flower.addEventListener('click', () => {
    const link = flower.parentElement.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});
