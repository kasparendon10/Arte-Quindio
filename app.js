// Scroll horizontal en desktop y vertical en mobile para la sección de productos
const productContainer = document.querySelector('.product-container');

function handleProductScroll() {
    if (window.innerWidth > 768) {
        productContainer.style.overflowX = 'auto';
        productContainer.style.overflowY = 'hidden';
    } else {
        productContainer.style.overflowX = 'hidden';
        productContainer.style.overflowY = 'auto';
    }
}

// Llamar a la función inicialmente y cada vez que se redimensione la ventana
handleProductScroll();
window.addEventListener('resize', handleProductScroll);

// Botón de WhatsApp
document.querySelector('.whatsapp-button').addEventListener('click', function(event) {
    event.preventDefault();

    const phoneNumber = '573235460535';
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = `https://wa.me/${phoneNumber}`;
    } else {
        window.location.href = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }
});
// Mostrar/ocultar el botón "Volver arriba"
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    // Mostrar el botón después de 300 píxeles de desplazamiento
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Funcionalidad para volver arriba suavemente
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
