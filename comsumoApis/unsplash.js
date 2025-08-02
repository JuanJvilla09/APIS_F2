const gallery = document.getElementById('gallery');
const accessKey = "Aw094Rc_gEpZRXo8H4YYvtOnSoMXRb2jXKhykNMLRx0"; // 🔹 Reemplaza con tu Access Key

// async/await
async function fetchPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${accessKey}`);
        if (!response.ok) throw new Error("Error al obtener las fotos");
        const photos = await response.json();
        renderPhotos(photos);
    } catch (error) {
        console.error("Error:", error);
        gallery.innerHTML = `<p class="text-red-500 text-center">No se pudieron cargar las imágenes </p>`;
    }
}

function renderPhotos(photos) {
    gallery.innerHTML = '';
    photos.forEach(photo => {
        const imgCard = document.createElement('div');
        imgCard.className = "overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300";
        imgCard.innerHTML = `
            <img src="${photo.urls.small}" alt="${photo.alt_description}" class="w-full h-60 object-cover">
        `;
        gallery.appendChild(imgCard);
    });
}


fetchPhotos();


fetch(`https://api.unsplash.com/photos/random?count=1&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => console.log("Foto adicional obtenida con then/catch:", data[0].urls.small))
    .catch(err => console.error("Error en then/catch:", err));
