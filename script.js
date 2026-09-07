// Datos de Especies Nativas de la Zona Central de Chile
const arboles = [
    {
        id: "peumo",
        nombre: "Peumo",
        nombreCientifico: "Cryptocarya alba",
        categoria: "esclerofilo",
        estado: "Preocupación Menor",
        icono: "🌳",
        descripcion: "Uno de los árboles más representativos del bosque esclerófilo. Destaca por sus hojas aromáticas y su fruto rojo brillante.",
        habitat: "Laderas de cerros y quebradas desde el nivel del mar hasta los 1500 msnm.",
        usos: "Medicinal (hojas para afecciones hepáticas y reumatismo), ornamental y protección de cuencas.",
        caracteristicas: "Alcanza hasta 15-20 m de altura. Hojas perennes, coriáceas, de verde intenso con revés más claro."
    },
    {
        id: "quillay",
        nombre: "Quillay",
        nombreCientifico: "Quillaja saponaria",
        categoria: "esclerofilo",
        estado: "Preocupación Menor",
        icono: "🌲",
        descripcion: "Árbol corteza grisácea famosa por contener saponina, usada históricamente como detergente natural y en la industria farmacéutica.",
        habitat: "Matorral esclerófilo, adaptado a suelos secos y laderas expuestas al sol.",
        usos: "Industrial (saponinas para vacunas y cosmética), melífero (excelente para producción de miel).",
        caracteristicas: "Puede medir hasta 15-20 m. Hojas duras con bordes ligeramente dentados. Flores estrelladas color blanco-amarillento."
    },
    {
        id: "boldo",
        nombre: "Boldo",
        nombreCientifico: "Peumus boldus",
        categoria: "esclerofilo",
        estado: "Preocupación Menor",
        icono: "🍃",
        descripcion: "Endémico de Chile. Muy conocido por las propiedades digestivas de sus hojas y su madera densa.",
        habitat: "Laderas secas y soleadas del valle central y cordillera de la costa.",
        usos: "Infusiones medicinales (boldina para el hígado), frutos comestibles muy dulces.",
        caracteristicas: "Crecimiento lento, alcanza entre 10 y 15 m. Hojas rugosas y aromáticas al estrujarlas."
    },
    {
        id: "litre",
        nombre: "Litre",
        nombreCientifico: "Lithraea caustica",
        categoria: "esclerofilo",
        estado: "Preocupación Menor",
        icono: "🌿",
        descripcion: "Arbolillo endémico conocido por causar reacciones alérgicas cutáneas en personas sensibles debido al urushiol.",
        habitat: "Zonas secas y soleadas, formar parte importante del matorral mediterráneo.",
        usos: "Protector de suelos contra la erosión, leña y producción de miel.",
        caracteristicas: "Follaje denso y verde brillante. Sus hojas presentan venación amarilla muy marcada."
    },
    {
        id: "belloto-del-norte",
        nombre: "Belloto del Norte",
        nombreCientifico: "Beilschmiedia miersii",
        categoria: "vulnerable",
        estado: "Vulnerable / Monumento Natural",
        icono: "🌳",
        descripcion: "Árbol monumental y frondoso endémico de la zona central. Declarado Monumento Natural en Chile.",
        habitat: "Quebradas húmedas de la Cordillera de la Costa.",
        usos: "Conservación de biodiversidad, ornamental y sombra de alto valor.",
        caracteristicas: "Puede superar los 25 m de altura. Copa amplia y globosa, frutos redondos similares a una bellota grande."
    },
    {
        id: "patagua",
        nombre: "Patagua",
        nombreCientifico: "Crinodendron patagua",
        categoria: "higrofilo",
        estado: "Preocupación Menor",
        icono: "🌸",
        descripcion: "Especie higrófila que habita en zonas húmedas o bordes de cursos de agua. Hermosas flores blancas en forma de campana.",
        habitat: "Quebradas, riberas de ríos y esteros de la zona central.",
        usos: "Mielífera por excelencia, ornamental en parques y jardines.",
        caracteristicas: "Árbol de hasta 10 m de altura. Florece copiosamente a fines de primavera."
    },
    {
        id: "palma-chilena",
        nombre: "Palma Chilena",
        nombreCientifico: "Jubaea chilensis",
        categoria: "vulnerable",
        estado: "En Peligro",
        icono: "🌴",
        descripcion: "La palma más austral del mundo y la de tronco más grueso. De crecimiento sumamente lento.",
        habitat: "Valles del interior y laderas de la Cordillera de la Costa en la zona mediterránea.",
        usos: "Históricamente usada para extraer la 'miel de palma' (práctica hoy restringida para su conservación).",
        caracteristicas: "Alcanza hasta 30 m de altura y un tronco de hasta 1.3 m de diámetro. Puede vivir más de 500 años."
    },
    {
        id: "arrayan",
        nombre: "Arrayán / Chequén",
        nombreCientifico: "Luma Chequen",
        categoria: "higrofilo",
        estado: "Preocupación Menor",
        icono: "🌱",
        descripcion: "Arbusto o árbol pequeño de hermosas flores blancas y hojas aromáticas que habita en terrenos húmedos.",
        habitat: "Bordes de arroyos, pantanos y vegas de la zona central.",
        usos: "Medicinal y ornamental por sus llamativas flores y corteza.",
        caracteristicas: "Altura de 4 a 9 metros. Tronco de corteza castaño-rojiza y hojas ovales relucientes."
    }
];

// DOM Elements
const treeGrid = document.getElementById('treeGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('treeModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Render Function
function renderTrees(data) {
    treeGrid.innerHTML = '';
    
    if(data.length === 0) {
        treeGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">No se encontraron especies que coincidan con la búsqueda.</p>';
        return;
    }

    data.forEach(tree => {
        const card = document.createElement('div');
        card.className = 'card tree-card';
        card.innerHTML = `
            <div class="tree-img-wrapper">
                ${tree.icono}
                <span class="tree-status">${tree.estado.split('/')[0]}</span>
            </div>
            <div class="tree-card-content">
                <h3>${tree.nombre}</h3>
                <span class="scientific-name">${tree.nombreCientifico}</span>
                <p class="tree-desc">${tree.descripcion}</p>
                <button class="tree-details-btn" onclick="openModal('${tree.id}')">Ver Ficha Completa</button>
            </div>
        `;
        treeGrid.appendChild(card);
    });
}

// Filter Logic
let currentFilter = 'todos';

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        filterAndSearch();
    });
});

// Search Logic
searchInput.addEventListener('input', filterAndSearch);

function filterAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filtered = arboles.filter(tree => {
        const matchesFilter = currentFilter === 'todos' || 
                              (currentFilter === 'vulnerable' ? (tree.estado.includes('Vulnerable') || tree.estado.includes('Peligro')) : tree.categoria === currentFilter);
        
        const matchesSearch = tree.nombre.toLowerCase().includes(searchTerm) || 
                              tree.nombreCientifico.toLowerCase().includes(searchTerm) ||
                              tree.habitat.toLowerCase().includes(searchTerm);

        return matchesFilter && matchesSearch;
    });

    renderTrees(filtered);
}

// Modal Logic
function openModal(id) {
    const tree = arboles.find(t => t.id === id);
    if (!tree) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${tree.nombre} ${tree.icono}</h2>
            <p class="scientific-name" style="font-size: 1.1rem;">${tree.nombreCientifico}</p>
            <span class="modal-tag">Estado: ${tree.estado}</span>
        </div>
        <div class="modal-section">
            <h4>Descripción</h4>
            <p>${tree.descripcion}</p>
        </div>
        <div class="modal-section">
            <h4>Morfología y Características</h4>
            <p>${tree.caracteristicas}</p>
        </div>
        <div class="modal-section">
            <h4>Hábitat y Distribución</h4>
            <p>${tree.habitat}</p>
        </div>
        <div class="modal-section">
            <h4>Usos e Importancia</h4>
            <p>${tree.usos}</p>
        </div>
    `;

    modal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderTrees(arboles);
});
