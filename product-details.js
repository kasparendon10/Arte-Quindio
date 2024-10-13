// Simulación de datos de productos (puedes reutilizar el mismo array de la página principal)
const products = [
    { name: 'Cafetera', image: 'img/CAFETERA.jpeg', description: 'Coladera tradicional para Cafe', price:65000},
    { name: 'Lampara Caperuza pequeña', image: 'img/LAMPARACAPERUZAPEQUEÑA.jpeg', description: 'Lampara caperuza ideal para decoracion o mesa de noche', price: 85000 },
    { name: 'Licorera Lazo', image: 'img/LICORERALAZO.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Licorera bandeja', image: 'img/LICORERABANDEJA.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 75000},
    { name: 'Licorera Carretilla', image: 'img/LICORERACARRETILLA.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 70000 },
    { name: 'Licorera Puntilla', image: 'img/LICORERAPUNTILLA.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 60000 },
    { name: 'Licorera Triciclo', image: 'img/LICORERATRICICLO.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 105000 },
    { name: 'Licorera Vaiven', image: 'img/LICORERAVAIVEN.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 85000 },
    { name: 'Cerdo Alcancia', image: 'img/CERDOALCANCIA.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 50000 },
    { name: 'Vaso Cervecero', image: 'img/VASOCERVECERO.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 30000 },
    { name: 'Pevetero', image: 'img/PEBETERO.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 35000 },
    { name: 'Portallavez', image: 'img/PORTALLAVEZ.jpeg', description: 'Bandeja de licorera hecha de guadua y madera reciclada.', price: 35000 }
];

// Cargar los datos del producto desde localStorage
const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

if (selectedProduct) {
    document.getElementById('productName').textContent = selectedProduct.name;
    document.getElementById('productDescription').textContent = selectedProduct.description;
    document.getElementById('productPrice').textContent = selectedProduct.price;
    
    // Cargar la imagen principal
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = selectedProduct.image;
    
    // Cargar las imágenes en miniatura
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const thumbnails = [
        selectedProduct.image,
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        'path/to/image4.jpg',
        'path/to/image5.jpg'
    ];
    
    thumbnails.forEach((src, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.addEventListener('click', () => changeMainImage(src));
        thumbnailContainer.appendChild(thumbnail);
    });
} else {
    // Si no hay datos, redirigir a la página principal
    window.location.href = 'index.html';
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

    // Opcionalmente, puedes incluir el nombre del producto en el mensaje
    const productName = selectedProduct.name;
    const message = encodeURIComponent(`Hola, estoy interesado en el producto: ${productName}podrias darme mas informacion?`);

    if (isMobile) {
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    } else {
        window.location.href = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
});
// Función para obtener productos relacionados (puedes filtrar por categoría, aquí usaremos aleatorios)
function getRelatedProducts(currentProduct) {
    return products
        .filter(product => product.name !== currentProduct.name) // Excluir el producto actual
        .sort(() => 0.5 - Math.random()) // Ordenar aleatoriamente
        .slice(0, 4); // Mostrar un máximo de 4 productos relacionados
}
// Función para renderizar productos relacionados
function renderRelatedProducts() {
    const relatedProductsContainer = document.querySelector('.related-products-container');
    const relatedProducts = getRelatedProducts(selectedProduct);
    
    relatedProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'related-product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toLocaleString()}</p>
            <a href="product-details.html" onclick="redirectToDetails('${product.name}', '${product.image}', '${product.description}', ${product.price})">Ver más</a>
        `;
        relatedProductsContainer.appendChild(productElement);
    });
}

// Llamar a la función para mostrar productos relacionados
renderRelatedProducts();
function redirectToDetails(name, image, description, price) {
    const productData = { name, image, description, price };
    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    window.location.href = 'product-details.html';
}
