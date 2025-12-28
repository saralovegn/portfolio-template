function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex";
    modalImage.src = element.dataset.full || element.src;
    modalCaption.textContent = element.alt;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
