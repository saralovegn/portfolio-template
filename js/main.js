// Sidebar móvil
function openSidebar() {
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.overlay').classList.add('active');
}

function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.overlay').classList.remove('active');
}

// Variables globales para el modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const caption = document.getElementById('modalCaption');
const galleryImages = document.querySelectorAll('.gallery__column img');
let currentIndex = 0;

// Función para mostrar la imagen en el modal
function showModalImage(index) {
    const img = galleryImages[index];
    modalImg.src = img.src;
    caption.textContent = img.alt;
}

// Abrir modal
function openModal(imgElement) {
    currentIndex = Array.from(galleryImages).indexOf(imgElement);
    showModalImage(currentIndex);
    modal.style.display = "flex";

    // Ocultar sidebar
    document.body.classList.add("modal-open");
}

// Cerrar modal
function closeModal() {
    modal.style.display = "none";

    // Mostrar sidebar nuevamente
    document.body.classList.remove("modal-open");
}

// Navegación dentro del modal
function changeModal(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = galleryImages.length - 1;
    if (currentIndex >= galleryImages.length) currentIndex = 0;

    showModalImage(currentIndex);
}
