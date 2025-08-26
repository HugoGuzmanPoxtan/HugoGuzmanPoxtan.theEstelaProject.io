document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");
    const modalText = document.getElementById("modalText");

    const textToType = "Hola mi corazon, hice esta pagina con el proposito de hacer una carta para ti un tanto diferente. Quiero decirte que me siento muy feliz de poder cumplir un mes";
    let index = 0;

    // Función para escribir el texto poco a poco
    function typeText() {
        if (index < textToType.length) {
            modalText.textContent += textToType[index];
            index++;
            setTimeout(typeText, 50); // Velocidad de escritura (50ms por carácter)
        }
    }

    // Abrir el modal y comenzar el efecto de escritura
    openModal.addEventListener("click", () => {
        modal.style.display = "block";
        modalText.textContent = ""; // Reinicia el texto
        index = 0; // Reinicia el índice
        typeText(); // Inicia el efecto de escritura
    });

    // Cerrar el modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});