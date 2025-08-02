const boton = document.getElementById('boton');
const resultado = document.getElementById('resultado');
const inputCiudad = document.getElementById('ciudad');

boton.addEventListener('click', async () => {
    const ciudad = inputCiudad.value.trim();
    const apiKey = '4d3a06c23afc44ebea3a5630081982bd'; // Tu API Key

    if (ciudad === '') {
        resultado.innerHTML = '<p class="text-red-400 font-semibold">Por favor, escribe una ciudad.</p>';
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric&lang=es`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('No se pudo obtener el clima (verifica el nombre de la ciudad)');

        const data = await res.json();
        mostrarClima(data);

    } catch (error) {
        resultado.innerHTML = `<p class="text-red-400 font-semibold">Error: ${error.message}</p>`;
    }
});

// Función para mostrar la tarjeta estilizada del clima
function mostrarClima(data) {
    const temp = Math.round(data.main.temp);
    const ciudad = data.name;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;
    const humedad = data.main.humidity;
    const viento = data.wind.speed;

    resultado.innerHTML = `
    <div class="bg-slate-800 p-5 rounded-xl shadow-md">
        <div class="flex items-center justify-between">
            <div>
                <h2 class="text-xl font-semibold text-cyan-400">${ciudad}</h2>
                <p class="capitalize text-gray-300">${descripcion}</p>
            </div>
            <img src="https://openweathermap.org/img/wn/${icono}@2x.png" alt="Icono clima" class="w-16 h-16">
        </div>
        <div class="mt-4 text-5xl font-bold text-white">${temp}°C</div>
        <div class="mt-4 space-y-1 text-gray-300 text-sm">
            <p>💧 Humedad: ${humedad}%</p>
            <p>🌬️ Viento: ${viento} m/s</p>
        </div>
    </div>
    `;
}
