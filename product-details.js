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
    const message = encodeURIComponent(`Hola, estoy interesado en el producto: ${productName}`);

    if (isMobile) {
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    } else {
        window.location.href = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
});