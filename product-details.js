// Simulación de datos de productos
const products = [
    { 
        name: 'Cafetera', 
        image: 'img/CAFETERA.jpeg', 
        thumbnails: [], 
        description: 'Coladera tradicional para Cafe', 
        price: 65000 
    },
    { 
        name: 'Cerdo Alcancia', 
        image: 'img/CERDOALCANCIA.jpeg', 
        thumbnails: [
            'img/CERDOALCANCIA1.jpeg',
            'img/CERDOALCANCIA2.jpeg',
            'img/CERDOALCANCIA3.jpeg',
        ], 
        description: 'Coladera tradicional para Cafe', 
        price: 65000 
    },
    { 
        name: 'Lampara Caperuza pequeña', 
        image: 'img/LAMPARACAPERUZAPEQUEÑA.jpeg', 
        thumbnails: [
            'img/LAMPARACAPERUZA1.jpeg.jpeg',
            'img/LAMPARACAPERUZA2.jpeg',
            'img/LAMAPRACAPERUZA3.jpeg'
        ],
        description: 'Lampara caperuza ideal para decoracion o mesa de noche', 
        price: 85000 
    },
    { 
        name: 'Licorera Lazo', 
        image: 'img/LICORERALAZO.jpeg', 
        thumbnails: ['img/LICORERALAZO.jpeg'],
        description: 'Bandeja de licorera hecha de guadua y madera reciclada.', 
        price: 50000 
    },
    { 
        name: 'Licorera bandeja', 
        image: 'img/LICORERABANDEJA.jpeg', 
        thumbnails: ['img/LICORERABANDEJA.jpeg'],
        description: 'Bandeja de licorera hecha de guadua y madera reciclada.', 
        price: 75000
    },
    { 
        name: 'Licorera Carretilla', 
        image: 'img/LICORERACARRETILLA.jpeg',thumbnails: [
            'img/LICORERACARRETILLA1.jpeg',
            'img/LICORERACARRETILLA2.jpeg',
        ], 
        description: 'Bandeja de licorera hecha de guadua y madera reciclada.', 
        price: 70000 
    },
    { 
        name: 'Licorera Puntilla', 
        image: 'img/LICORERAPUNTILLA.jpeg', thumbnails: [
            'img/LICORERACARRETILLA1.jpeg',
            'img/LICORERAPUNTILLA3.jpeg',
            'img/LICORERAPUNTILLA4.jpeg',
        ], 
        description: 'Bandeja de licorera hecha de guadua y madera reciclada.', 
        price: 60000 
    },
    { 
        name: 'Licorera Triciclo', 
        image: 'img/LICORERATRICICLO.jpeg', 
        thumbnails: [
            'img/LICORERATRICICLO2.jpeg',
            'img/LICORERATRICICLO3.jpeg',
            'img/LICORERATRICICLO3.jpeg',
            'img/LICORERATRICICLO4.jpeg',
        ],
        description: 'Portallaves decorativo hecho de guadua', 
        price: 35000 
    },
    { 
        name: 'Licorera Vaiven', 
        image: 'img/LICORERAVAIVEN.jpeg', 
        thumbnails: ['img/LICORERAVAIVEN.jpeg'],
        description: 'Bandeja de licorera hecha de guadua y madera reciclada.', 
        price: 85000 
    },
    { 
        name: 'Vaso Cervecero', 
        image: 'img/VASOCERVECERO.jpeg', 
        thumbnails: [
            'img/VASOCERVECERO2.jpeg'
        ],
        description: 'Vaso cervecero artesanal hecho de guadua', 
        price: 30000 
    },
    { 
        name: 'Pevetero', 
        image: 'img/PEBETERO.jpeg', 
        thumbnails: [
            'img/PEBETERO.jpeg',
            'img/PEVETERO1.jpeg'
        ],
        description: 'Pebetero artesanal para inciensos', 
        price: 35000 
    },
    { 
        name: 'Portallavez', 
        image: 'img/PORTALLAVEZ.jpeg', 
        thumbnails: [
            'img/PORTALLAVEZ1.jpeg',
            'img/PORTALLAVEZ2.jpeg',
        ],
        description: 'Portallaves decorativo hecho de guadua', 
        price: 35000 
    },
    { 
        name: 'Alcancia Cilindro', 
        image: 'img/ALCANCIACILINDRO.jpeg', 
        thumbnails: [
            'img/ALCANCIACILINDRO2.jpeg',
            'img/ALCANCIACILINDRO3.jpeg',
        ],
        description: 'Portallaves decorativo hecho de guadua', 
        price: 35000 
    },
    { 
        name: 'Candelabro', 
        image: 'img/CANDELABRO.jpeg', 
        thumbnails: [
            'img/CANDELABRO1.jpeg',
            'img/CANDELABRO2.jpeg',
        ],
        description: 'Portallaves decorativo hecho de guadua', 
        price: 35000 
    },
    { 
        name: 'Cofre', 
        image: 'img/COFRE.jpeg', 
        thumbnails: [
            'img/COFRE1.jpeg',
            'img/COFRE2.jpeg',
            'img/COFRE3.jpeg',
            'img/COFRE4.jpeg',
        ],
        description: 'Portallaves decorativo hecho de guadua', 
        price: 35000 
    },
    { 
        name: 'Licorera', 
        image: 'img/LICORERA.jpeg', 
        thumbnails: [
            'img/LICORERA2.jpeg',
            'img/LICORERA3.jpeg',
            'img/LICORERA4.jpeg',
        ],
        description: 'Portallaves decorativo hecho de guadua', 
        price: 35000 
    },
    { 
        name: 'Licorera Pincelada', 
        image: 'img/LICORERAPINCELADA.jpeg', 
        thumbnails: [
            'img/LICORERAPINCELADA2.jpeg',
            'img/LICORERAPINCELADA3.jpeg',
            'img/LICORERAPINCELADA4.jpeg',
            'img/LICORERAPINCELADA5.jpeg',
        ],
        description: 'Portallaves decorativo hecho de guadua', 
        price: 35000 
    },
    { 
        name: 'Saleros', 
        image: 'img/SALERO.jpeg', 
        thumbnails: [
            'img/SALERO2.jpeg',
            'img/SALERO3.jpeg',
        ],
        description: 'Portallaves decorativo hecho de guadua', 
        price: 35000 
    },
];

let selectedProduct;

// Función para cargar los detalles del producto
function loadProductDetails(product) {
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productPrice').textContent = product.price.toLocaleString();
    
    // Cargar la imagen principal
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = product.image;
    mainImage.alt = product.name;
    
    // Cargar las imágenes en miniatura
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailContainer.innerHTML = ''; // Limpiar las miniaturas existentes
    
    const thumbnails = product.thumbnails || [product.image];
    
    thumbnails.forEach((src, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = src;
        thumbnail.alt = `${product.name} - Imagen ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.addEventListener('click', () => changeMainImage(src));
        thumbnailContainer.appendChild(thumbnail);
    });
}

function changeMainImage(src) {
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = src;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.toggle('active', thumb.src === src);
    });
}

// Zoom functionality
const zoomContainer = document.querySelector('.zoom-container');
const mainImage = document.getElementById('mainProductImage');

zoomContainer.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = zoomContainer.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    mainImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    mainImage.style.transform = 'scale(2)';
});

zoomContainer.addEventListener('mouseleave', () => {
    mainImage.style.transformOrigin = 'center center';
    mainImage.style.transform = 'scale(1)';
});

document.getElementById('contactButton').addEventListener('click', function(event) {
    event.preventDefault();

    const phoneNumber = '573235460535'; // Reemplaza con tu número
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const productName = selectedProduct.name;
    const message = encodeURIComponent(`Hola, estoy interesado en el producto:" " ${productName}. ¿Podrías darme más información?`);

    if (isMobile) {
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    } else {
        window.location.href = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
});

// Función para obtener productos relacionados
function getRelatedProducts(currentProduct) {
    const filteredProducts = products.filter(product => 
        product.name !== currentProduct.name && product.thumbnails && product.thumbnails.length > 0
    );
    
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    
    return shuffled.slice(0, 4);
}

// Función para renderizar productos relacionados
function renderRelatedProducts() {
    const relatedProductsContainer = document.querySelector('.related-products-container');
    relatedProductsContainer.innerHTML = ''; // Limpiar los productos relacionados existentes
    const relatedProducts = getRelatedProducts(selectedProduct);
    
    if (relatedProducts.length === 0) {
        relatedProductsContainer.innerHTML = '<p>No hay mas productos disponibles.</p>';
        return;
    }
    
    relatedProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'related-product';
        productElement.innerHTML = `
            <img src="${product.thumbnails[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toLocaleString()}</p>
            <a href="#" onclick="redirectToDetails('${product.name}'); return false;">Ver más</a>
        `;
        relatedProductsContainer.appendChild(productElement);
    });
}

function redirectToDetails(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        selectedProduct = product; // Actualizar el producto seleccionado
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        loadProductDetails(product);
        renderRelatedProducts(); // Volver a renderizar los productos relacionados
        window.scrollTo(0, 0);
    }
}

// Función para inicializar la página
function initPage() {
    // Cargar los datos del producto desde localStorage o usar el primer producto como fallback
    selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!selectedProduct) {
        selectedProduct = products[0]; // Usar el primer producto si no hay ninguno seleccionado
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    }

    // Cargar los detalles del producto
    loadProductDetails(selectedProduct);

    // Llamar a la función para mostrar productos relacionados
    renderRelatedProducts();
}

// Llamar a la función de inicialización cuando se cargue la página
window.addEventListener('load', initPage);