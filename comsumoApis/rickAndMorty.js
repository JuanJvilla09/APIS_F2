
const API_URL = 'https://rickandmortyapi.com/api/character';
let paginaActual = 1;
let totalPaginas = 1;


const btnCargar = document.getElementById('loadCharacters');
const btnMas = document.getElementById('loadMore');
const btnLimpiar = document.getElementById('clearData');
const contenedor = document.getElementById('charactersContainer');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const errorMsg = document.getElementById('errorMessage');

// Conectar botones con funciones
btnCargar.addEventListener('click', cargarPersonajes);
btnMas.addEventListener('click', cargarMasPersonajes);
btnLimpiar.addEventListener('click', limpiarDatos);


function mostrarCarga() {
    loading.classList.remove('hidden');
    error.classList.add('hidden');
}


function ocultarCarga() {
    loading.classList.add('hidden');
}

// Mostrar errores
function mostrarError(mensaje) {
    errorMsg.textContent = mensaje;
    error.classList.remove('hidden');
    ocultarCarga();
}

// Funcion principal para cargar personajes
async function cargarPersonajes() {
    console.log('Empezando a cargar personajes...');
    
    try {
        
        paginaActual = 1;
        contenedor.innerHTML = '';
        btnMas.classList.add('hidden');
        
        // Llamar a la API
        await obtenerDatos(paginaActual);
        
    } catch (err) {
        console.log('Error:', err);
        mostrarError('No se pudieron cargar los personajes');
    }
}

// Funcion para cargar mas personajes
async function cargarMasPersonajes() {
    console.log('Cargando mas personajes...');
    
    try {
        paginaActual = paginaActual + 1;
        await obtenerDatos(paginaActual);
    } catch (err) {
        console.log('Error cargando mas:', err);
        mostrarError('Error al cargar mas personajes');
    }
}


async function obtenerDatos(pagina) {
    mostrarCarga();
    
    try {
        // fetch
        const url = `${API_URL}?page=${pagina}`;
        console.log('Pidiendo datos a:', url);
        
        const respuesta = await fetch(url);
        
        // Verificar si salio bien
        if (!respuesta.ok) {
            throw new Error('La API no respondio bien');
        }
        
        // Convertir a JSON
        const datos = await respuesta.json();
        
        
        procesarPersonajes(datos);
        
        ocultarCarga();
        
    } catch (error) {
        console.log('Error en fetch:', error);
        mostrarError('Error de conexion: ' + error.message);
    }
}

function procesarPersonajes(datos) {
    try {
        
        totalPaginas = datos.info.pages;
        console.log(`Pagina ${paginaActual} de ${totalPaginas}`);
        
        
        const personajes = datos.results;
        
        
        personajes.forEach(personaje => {
            crearCard(personaje);
        });
        
        
        if (paginaActual < totalPaginas) {
            btnMas.classList.remove('hidden');
        } else {
            btnMas.classList.add('hidden');
        }
        
    } catch (err) {
        console.log('Error procesando:', err);
        mostrarError('Error procesando los datos');
    }
}


function crearCard(personaje) {
    try {
        
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg';
        
        
        let colorStatus = 'bg-gray-500';
        if (personaje.status === 'Alive') colorStatus = 'bg-green-500';
        if (personaje.status === 'Dead') colorStatus = 'bg-red-500';
        if (personaje.status === 'unknown') colorStatus = 'bg-yellow-500';
        
        
        let colorEspecie = 'text-gray-700';
        if (personaje.species === 'Human') colorEspecie = 'text-blue-600';
        if (personaje.species === 'Alien') colorEspecie = 'text-purple-600';
        
        
        card.innerHTML = `
            <div class="relative">
                <img src="${personaje.image}" alt="${personaje.name}" class="w-full h-48 object-cover">
                <div class="${colorStatus} text-white text-xs px-2 py-1 rounded absolute top-2 right-2">
                    ${personaje.status}
                </div>
            </div>
            
            <div class="p-4">
                <h3 class="text-lg font-bold text-gray-800 mb-2">${personaje.name}</h3>
                
                <div class="text-sm space-y-1">
                    <p><span class="font-medium">Especie:</span> 
                    <span class="${colorEspecie}">${personaje.species}</span></p>
                    
                    <p><span class="font-medium">Genero:</span> ${personaje.gender}</p>
                    
                    <p><span class="font-medium">Origen:</span> ${personaje.origin.name}</p>
                    
                    <p><span class="font-medium">Ubicacion:</span> ${personaje.location.name}</p>
                </div>
            </div>
        `;
        
        
        contenedor.appendChild(card);
        
    } catch (err) {
        console.log('Error creando card:', err);
    }
}

// Funcion para limpiar todo
function limpiarDatos() {
    console.log('Limpiando datos...');
    
    
    contenedor.innerHTML = '';
    
    
    btnMas.classList.add('hidden');
    error.classList.add('hidden');
    ocultarCarga();
    
    
    paginaActual = 1;
    totalPaginas = 1;
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Pagina lista para usar');
});