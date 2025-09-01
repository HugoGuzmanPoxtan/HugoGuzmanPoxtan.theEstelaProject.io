document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");
    const modalText = document.getElementById("modalText");

    const modal2 = document.getElementById("myModal2");
    const openModal2 = document.getElementById("openModal2");
    const closeModal2 = document.querySelector(".close");

    const textToType = "Feliz primer mes mi niña hermosa 💓. Quiero decirte para comenzar que me siento muy feliz de cumplir este primer mes, hemos logrado formar y comenzar una relacion tan bonita que enserio es de ensueño. Lo que he llegado a conocer de ti me ha gustado mucho, tu forma de ser sin duda es una de las partes mas lindas, porque ademas de ser fisicamente hermosa, como persona y como pareja termina de completar a la perfeccion tu persona y evidentemente a mi eso me enamora demasiado.Quiero agradecer los gestos tan bonitos que tienes hacia mi, porque siempre me hacen tan feliz, hacen que me sienta demasiado especial y sobretodo muy afortunado de tener a alguien unica en mi vida. Llegaste a complementar de una forma muy especial mi vida, de una manera en la que jamas habria imaginado y sobretodo por como nos conocimos, cuando sucedio si me puse a pensar en lo mucho que podriamos hacer y lograr como pareja, hoy, a este primer mes veo que no me equivoque, al contrario, hemos hecho mas de lo que un dia imagine. Bien dicen que para que llegue algo muy bonito hay que saber esperar, ser paciente y me alegro de haber esperado bien y que la vida me recompensara de esa manera. Te quiero mucho mi vida, muchisimo, tengo un sentimiento muy especial por ti, un sentimiento que cada dia que pasa es mas que claro que crece mas y mas, en especial porque es mutuo, algo que sin duda adoro de nuestra relacion, la adoro con el corazon, enserio que es una felicidad enorme contigo❤️";
    
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
        "Nuestra primer foto, un hermoso recuerdo del dia que te conoci y pense una y mil veces que en definitiva queria formar una relacion a tu lado 💕.",
        "El domingo de novios que tanto habiamos querido y que espero sigan siendo muchisimos mas ♥️",
        "El primer ramo de flores que te di y que elegi con tanto cariño esperando hacerte feliz 💕.",
        "El dia en que quede maravillado por verte de nuevo y al lucir tan hermosa que pense una y miil veces en decirte todo lo que sentia y siento 💕"
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

    // Abrir el modal 2, muestra la primera imagen y texto
    openModal2.addEventListener("click", () => {
        modal2.style.display = "block";
        currentIndex = 0;
        showImage(currentIndex);
    });
    
    const audio = document.getElementById("myAudio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const audioStatus = document.getElementById("audioStatus");

    const playIcon = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><polygon points="6,4 24,14 6,24" fill="white"/></svg>`;
    const pauseIcon = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="6" y="4" width="5" height="20" fill="white"/><rect x="17" y="4" width="5" height="20" fill="white"/></svg>`;

    playPauseBtn.innerHTML = playIcon;

    if (audio && playPauseBtn) {
        playPauseBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.innerHTML = pauseIcon;
                audioStatus.textContent = "Pausar canción";
            } else {
                audio.pause();
                playPauseBtn.innerHTML = playIcon;
                audioStatus.textContent = "Reproducir canción";
            }
        });

        audio.addEventListener("ended", () => {
           playPauseBtn.innerHTML = pauseIcon;
            audioStatus.textContent = "Reproducir canción";
        });
    }
    
});