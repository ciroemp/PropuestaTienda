// Base de datos estática para el experimento
const stockProductos = [
    {
        id: 1,
        nombre: "Closet Movible Estándar",
        categoria: "Movibles",
        descripcion: "Incluye rodos o niveladores. Perfecto para habitaciones dinámicas.",
        imagen: "https://offitodoclosets.com/wp-content/uploads/2021/11/Closet1-300x300.jpg",
        whatsapp: "https://wa.me/50379044193?text=Hola! Me interesa el Closet Movible"
    },
    {
        id: 2,
        nombre: "Combo Closet de Pared",
        categoria: "Estructural",
        descripcion: "Maximiza el espacio de tu dormitorio con diseño a medida.",
        imagen: "https://offitodoclosets.com/wp-content/uploads/2021/11/Closet6-300x300.jpg",
        whatsapp: "https://wa.me/50379044193?text=Hola! Me interesa el Closet de Pared"
    },
    {
        id: 3,
        nombre: "Pantry Metálico 100%",
        categoria: "Cocina",
        descripcion: "Resistente a la humedad y mano de obra 100% salvadoreña.",
        imagen: "https://offitodoclosets.com/wp-content/uploads/2021/11/Closet9-300x300.jpg",
        whatsapp: "https://wa.me/50379044193?text=Hola! Me interesa un Pantry metálico"
    }
];

// Inyección de productos al DOM
function renderizarProductos() {
    const contenedor = document.getElementById('product-list');
    
    const html = stockProductos.map(producto => `
        <div class="col-md-4">
            <div class="card h-100 product-card">
                <div class="position-relative">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <span class="badge bg-gold position-absolute top-0 end-0 m-3">${producto.categoria}</span>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title lora-font fw-bold">${producto.nombre}</h5>
                    <p class="card-text text-muted small">${producto.descripcion}</p>
                    <div class="mt-auto">
                        <hr>
                        <a href="${producto.whatsapp}" target="_blank" class="btn btn-gold w-100">
                            <i class="fab fa-whatsapp me-2"></i>Cotizar Ahora
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    contenedor.innerHTML = html;
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', renderizarProductos);