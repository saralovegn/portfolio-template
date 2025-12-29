// Sidebar móvil
function openSidebar() {
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.overlay').classList.add('active');
}

function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.overlay').classList.remove('active');
}

// Modal galería
function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');

    modal.style.display = 'flex';
    modalImg.src = img.src;
    caption.textContent = img.alt;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
