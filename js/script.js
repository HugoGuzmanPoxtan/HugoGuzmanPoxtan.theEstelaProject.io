document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");
    const modalText = document.getElementById("modalText");

    const modal2 = document.getElementById("myModal2");
    const openModal2 = document.getElementById("openModal2");
    const closeModal2 = document.querySelector(".close");
    const modalText2 = document.getElementById("modalText2");

    const textToType = "Hola mi amor, hice esta pagina con el proposito de hacer una carta para ti, un tanto diferente. Quiero decirte que me siento muy feliz de poder cumplir un mes  a tu lado y de poder disfrutar tantas cosas juntos, me has hecho demasiado feliz y sin duda alguna me encanta ese hecho, he aprendido cosas de ti que sin duda hacen que cada dia me enamore mas y mas de ti, aspectos tan bonitos, tu sonrisa, tus ojos y tu carita tan preciosa, ademas en tu forma de ser es un punto el cual yo queria conocer y me siento muy afortunado de tener la oportunidad de hacerlo.";
    let index = 0;

    // Función para escribir el texto poco a poco
    function typeText() {
        if (index < textToType.length) {
            modalText.textContent += textToType[index];
            index++;
            setTimeout(typeText, 50); // Velocidad de escritura
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


    // Abrir el segundo modal
    openModal2.addEventListener("click", () => {
        modal2.style.display = "block";
    });

    // Cerrar el modal
    closeModal2.addEventListener("click", () => {
        modal2.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target === modal2) {
            modal2.style.display = "none";
        }
    });

    const images = [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg"
    ];

    const imageTexts = [
        "La primera foto, tan especial como única.",
        "El domingo de novios que tanto habiamos querido.",
        "El primer ramo de flores que te di.",
        "El dia en que supe que sabia que ibamos a estar juntos y que es ella a quien quiero"
    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById("carouselImage");
    const carouselText = document.getElementById("carouselText");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function showImage(index) {
        carouselImage.style.opacity = 0;
        setTimeout(() => {
            carouselImage.src = images[index];
            carouselImage.onload = () => {
                carouselImage.style.opacity = 1;
            };
            carouselText.textContent = imageTexts[index];
        }, 300);
    }

    if (prevBtn && nextBtn && carouselImage && carouselText) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    }

    // Cuando abras el modal 2, muestra la primera imagen y texto
    openModal2.addEventListener("click", () => {
        modal2.style.display = "block";
        currentIndex = 0;
        showImage(currentIndex);
    });
    
});