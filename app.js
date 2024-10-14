// Datos de ejemplo para los productos
const products = [
    { name: 'Cafetera', image: 'img/CAFETERA.jpeg', description: 'Coladera tradicional para Cafe', price: 65000 },
    { name: 'Lampara Caperuza pequeña', image: 'img/LAMPARACAPERUZAPEQUEÑA.jpeg', description: 'Lampara caperuza ideal para decoracion o mesa de noche', price: 85000 },
    { name: 'Licorera bandeja', image: 'img/LICORERABANDEJA.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 75000 },
    { name: 'Licorera Carretilla', image: 'img/LICORERACARRETILLA.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 70000 },
    { name: 'Licorera Puntilla', image: 'img/LICORERAPUNTILLA.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 60000 },
    { name: 'Licorera Triciclo', image: 'img/LICORERATRICICLO.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 105000 },
    { name: 'Licorera Vaiven', image: 'img/LICORERAVAIVEN.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 85000 },
    { name: 'Cerdo Alcancia', image: 'img/CERDOALCANCIA.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Vaso Cervecero', image: 'img/VASOCERVECERO.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 30000 },
    { name: 'Pevetero', image: 'img/PEBETERO.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 35000 },
    { name: 'Portallavez', image: 'img/PORTALLAVEZ.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 35000 },
    // Añade más productos aquí...
];

const productsPerPage = 12; // Número de productos por página
let currentPage = 1;

// Función para mostrar productos en el slider
function displayProducts() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = ''; // Limpiar productos previos

    // Obtener los productos de la página actual
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);

    // Mostrar solo los productos de la página actual
    pageProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'swiper-slide'; // Clase para Swiper
        productElement.innerHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price.toLocaleString()}</p>
                <p>${product.description}</p>
            </div>
        `;
        productElement.onclick = () => redirectToDetails(product);
        swiperWrapper.appendChild(productElement);
    });

    // Inicializamos o actualizamos Swiper
    initSwiper();
}


function initSwiper() {
    new Swiper('.swiper-container', {
        slidesPerView: 1, // Mostrar 1 slide por defecto (ajusta según necesidad)
        spaceBetween: 10, // Espacio ajustado entre slides
        loop: false, // Desactiva el loop para evitar problemas
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // 2 productos por vista en pantallas medianas
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3, // 3 productos por vista en pantallas grandes
                spaceBetween: 20,
            },
        },
    });
}


// Función para redirigir a la página de detalles
function redirectToDetails(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'product-details.html'; // Cambia a la URL de tu página de detalles
}

// Inicializar la visualización de productos
displayProducts();

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

// Calendario de Eventos
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        events: [
            {
                title: 'Feria Artesanal - Diciembre',
                start: '2024-12-10',
                end: '2024-12-15'
            },
            {
                title: 'Feria Artesanal - Semana Santa',
                start: '2024-04-08',
                end: '2024-04-12'
            }
            // Añade más eventos aquí
        ]
    });
    calendar.render();
});

// Funcionalidad de cambio de idioma
const languageSelect = document.querySelector('#language-select');

languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
});

function changeLanguage(language) {
    document.documentElement.lang = language; // Cambia el atributo lang del HTML
    const translations = {
        es: {
            title: 'Bienvenidos a Arte Quindío',
            description: 'Descubre lo mejor de nuestros productos artesanales',
            contact: 'Contáctanos',
        },
        en: {
            title: 'Welcome to Arte Quindío',
            description: 'Discover the best of our handmade products',
            contact: 'Contact us',
        },
        fr: {
            title: 'Bienvenue à Arte Quindío',
            description: 'Découvrez le meilleur de nos produits artisanaux',
            contact: 'Contactez-nous',
        },
        it: {
            title: 'Benvenuti a Arte Quindío',
            description: 'Scopri il meglio dei nostri prodotti fatti a mano',
            contact: 'Contattaci',
        },
    };

    const texts = translations[language];

    // Cambiar textos en la página según el idioma
    document.querySelector('.hero h1').textContent = texts.title;
    document.querySelector('.hero p').textContent = texts.description;
    document.querySelector('.contact-button').textContent = texts.contact;
    backToTopButton.textContent = '↑'; // Ajustar según el idioma
}
