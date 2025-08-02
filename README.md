# 📚 Consumo de APIs 

## 🎯 Objetivo del Proyecto

El objetivo principal fue aprender a consumir APIs REST utilizando JavaScript vanilla, practicando conceptos como:
- Programación asíncrona (async/await)
- Manejo de promesas con .then() y .catch()
- Fetch API para peticiones HTTP
- Manipulación dinámica del DOM
- Manejo de errores y estados de carga

## 🗂️ Estructura del Proyecto

```
📦 api-projects/
├── 🎬 Rick and Morty API/
│   ├── rickAndMorty.html
│   └── rickAndMorty.js
├── 🌤️ Weather API/
│   ├── weatherapp.html
│   └── scriptClima.js
├── 📸 Unsplash Gallery/
│   ├── unsplash.html
│   └── unsplash.js
└── 📄 README.md
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica de las páginas
- **JavaScript ES6+** - Lógica y consumo de APIs
- **Tailwind CSS** - Framework de CSS para estilos rápidos
- **Fetch API** - Para realizar peticiones HTTP
- **APIs REST** - Diferentes servicios web públicos

## 📋 Proyectos Incluidos

### 1. 🎬 Rick and Morty API

**Descripción:** Galería de personajes de la serie Rick and Morty con paginación.

**Características:**
- Consumo de la API de Rick and Morty
- Paginación automática (botón "Ver Más")
- Cards responsivas con información del personaje
- Estados de status con colores (Alive, Dead, Unknown)
- Manejo de errores y loading states

**API Utilizada:** `https://rickandmortyapi.com/api/character`

**Conceptos Aplicados:**
- async/await para peticiones asíncronas
- Manipulación del DOM con createElement
- Grid responsive con Tailwind
- Manejo de estados de la aplicación


### 2. 🌤️ Weather API

**Descripción:** Aplicación para consultar el clima de cualquier ciudad del mundo.

**Características:**
- Búsqueda por nombre de ciudad
- Información detallada del clima actual
- Iconos dinámicos según condiciones climáticas
- Interfaz estilizada con diseño oscuro
- Validación de entrada del usuario

**API Utilizada:** `https://api.openweathermap.org/data/2.5/weather`

**Conceptos Aplicados:**
- Validación de formularios
- Manejo de inputs del usuario
- Template literals para HTML dinámico
- Conversión de unidades (Kelvin a Celsius)

### 3. 📸 Unsplash Gallery

**Descripción:** Galería de fotos aleatorias obtenidas de Unsplash.

**Características:**
- Carga de 10 fotos aleatorias al iniciar
- Grid responsivo para diferentes tamaños de pantalla
- Efectos hover con transformaciones CSS
- Ejemplo combinado de async/await y .then()/.catch()

**API Utilizada:** `https://api.unsplash.com/photos/random`

**Conceptos Aplicados:**
- Dos métodos de programación asíncrona en un mismo proyecto
- Manejo de arrays y forEach
- CSS Grid con Tailwind
- Optimización de imágenes

## 📖 Conceptos Aprendidos

Durante el desarrollo de estos proyectos aprendí:

### Programación Asíncrona
- **async/await:** Sintaxis más limpia para manejar promesas
- **Promesas:** Uso de .then() y .catch() para operaciones asíncronas
- **Fetch API:** Reemplazo moderno de XMLHttpRequest

### Manejo de Errores
- **try/catch:** Captura de errores en funciones async
- **Estados de error:** Mostrar mensajes útiles al usuario
- **Validación:** Verificar respuestas de API antes de procesarlas

### Manipulación del DOM
- **createElement:** Crear elementos HTML dinámicamente
- **innerHTML:** Insertar HTML generado por JavaScript
- **Event Listeners:** Manejar interacciones del usuario

### Responsive Design
- **CSS Grid:** Layout flexible para diferentes dispositivos
- **Tailwind CSS:** Framework utility-first para estilos rápidos
- **Media queries:** Adaptación automática a diferentes pantallas

## 🔄 Flujo de Trabajo Típico

1. **Hacer petición a la API** con fetch()
2. **Verificar la respuesta** con response.ok
3. **Convertir a JSON** con response.json()
4. **Procesar los datos** y extraer información relevante
5. **Crear elementos HTML** dinámicamente
6. **Mostrar en la interfaz** agregando al DOM
7. **Manejar errores** en cada paso del proceso

## 🐛 Problemas Encontrados y Soluciones

### CORS (Cross-Origin Resource Sharing)
**Problema:** Algunas APIs no permiten peticiones desde localhost
**Solución:** Usar APIs que soporten CORS o ejecutar desde un servidor local

### API Keys
**Problema:** Exposición de claves en el frontend
**Solución:** Para proyectos de aprendizaje está bien, pero en producción se debe usar un backend

### Manejo de Estados
**Problema:** Múltiples clicks en botones causaban peticiones duplicadas
**Solución:** Deshabilitar botones durante las peticiones

## 🎨 Decisiones de Diseño

- **Colores:** Paletas que representen cada temática (verde para Rick and Morty, azul para clima, negro para galería)
- **Layout:** Grid responsivo para adaptarse a diferentes dispositivos
- **UX:** Estados de carga claros y mensajes de error descriptivos
- **Accesibilidad:** Alt text en imágenes y contraste adecuado


**Desarrollado con ❤️ como parte de mi aprendizaje en desarrollo de software**

*¿Tienes alguna pregunta o sugerencia? No dudes en contactarme!*
