// Datos de ejemplo para los productos
const products = [
    { name: 'Licorera bandeja', image: 'img/producto1.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Licorera bandeja', image: 'img/producto1.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Licorera bandeja', image: 'img/producto1.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Licorera bandeja', image: 'img/producto1.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Licorera bandeja', image: 'img/producto1.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Licorera bandeja', image: 'img/producto1.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Licorera bandeja', image: 'img/producto1.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    // Añade más productos aquí...
];

const productsPerPage = 5;
let currentPage = 1;

function displayProducts() {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);

    pageProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toLocaleString()}</p>
        `;
        productElement.onclick = () => redirectToDetails(product.name, product.image, product.description, product.price);
        productContainer.appendChild(productElement);
    });

    updatePaginationButtons();
}

function updatePaginationButtons() {
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan = document.getElementById('totalPages');

    const totalPages = Math.ceil(products.length / productsPerPage);

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayProducts();
    }
});

function redirectToDetails(name, image, description, price) {
    const productData = { name, image, description, price };
    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    window.location.href = 'product-details.html';
}

// Inicializar la visualización de productos
displayProducts();

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

function toggleExpand(element) {
    // Cierra cualquier tarjeta expandida antes de abrir la seleccionada
    const expandedProduct = document.querySelector('.product.expanded');
    if (expandedProduct && expandedProduct !== element) {
        expandedProduct.classList.remove('expanded');
    }

    // Alterna la clase 'expanded' en la tarjeta seleccionada
    element.classList.toggle('expanded');
}