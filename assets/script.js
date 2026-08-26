// Reemplazá este valor por el número de WhatsApp en formato internacional, sin + ni espacios.
// Ejemplo Argentina: 54911XXXXXXXX
const WHATSAPP_NUMBER = "54911XXXXXXXX";
const WHATSAPP_MESSAGE = "Hola, vi la página de Casita de la Colina y quería consultar disponibilidad.";

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (WHATSAPP_NUMBER.includes('X')) {
      event.preventDefault();
      alert('Falta configurar el número de WhatsApp en assets/script.js.');
      return;
    }
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const showMoreButton = document.getElementById('showMoreGallery');
const moreGallery = document.getElementById('moreGallery');
showMoreButton.addEventListener('click', () => {
  const isHidden = moreGallery.hidden;
  moreGallery.hidden = !isHidden;
  showMoreButton.innerHTML = isHidden ? 'Ver menos fotos <span>↑</span>' : 'Ver más fotos <span>↓</span>';
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.full;
    lightbox.showModal();
  });
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
