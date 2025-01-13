let currentPage = 1;
const totalPages = 5;
const loader = document.getElementById("loader");

// Detección de idioma del navegador
const language = navigator.language || navigator.userLanguage;
const isSpanish = language.startsWith("es");

// Contenidos en español e inglés
const textContent = {
  es: {
    headerText: "Jose Angel Colin Ortiz",
    page1Title: "Bienvenidos",
    page1Content: "Bienvenidos a mi portafolio interactivo, desarrollado por mí. Haga clic en cada esquina de la página para avanzar o retroceder y descubrir más sobre mi carrera como desarrollador.",
    polaroidCaption: "Apasionado programador y diseñador",
    page2Title: "Experiencia",
    page2Content: "Aquí encontrarás detalles sobre mi experiencia y proyectos en desarrollo de software y tecnología.",
    carouselTitle1: "CRM Arquitectónico",
    carouselText1: "Sistema de administración de empleados para pagos y asistencias.",
    carouselTitle2: "App Tipo Uber",
    carouselText2: "Aplicación móvil para transporte.",
    carouselTitle3: "E-commerce con Chat AI",
    carouselText3: "Tienda en línea con soporte automatizado mediante OpenAI.",
    page3Title: "Diseño y Creatividad",
    page3Content: "Mi pasión por el diseño incluye habilidades avanzadas en modelado 3D, edición de videos y tecnologías relacionadas. Aquí tienes algunos ejemplos:",
    designList: `
      <ul>
        <li><strong>Edición de videos:</strong> Premiere Pro, After Effects.</li>
        <li><strong>Modelado 3D:</strong> Blender, 3D Max, Modo13.</li>
        <li><strong>Diseño gráfico:</strong> Photoshop, Illustrator.</li>
        <li><strong>Otras tecnologías:</strong> Unity 3D, Unreal Engine.</li>
      </ul>`,
    designLibraryLink: `Explora más sobre mis proyectos en mi biblioteca:
      <a href="https://drive.google.com/drive/folders/1pyHa83MEUejZzkVynTI-KGDchsm_9eQ4?usp=drive_link" target="_blank">📂 Mi Biblioteca de Diseño</a>`,
    page4Title: "Pokédex",
    page4Content: "Encuentra y conoce más sobre los Pokémon usando esta Pokédex. Tengo experiencia en el uso de APIs.",
    page5Title: "Tales of the Cryptozoo",
    page5Content: "Tales of the Cryptozoo es un juego de horror psicológico desarrollado y diseñado completamente por mí. Todo el diseño gráfico, la programación y el modelado 3D fueron creados desde cero por mí, con la intención de ofrecer una experiencia inmersiva y única. ¡Explora el mundo y descubre sus secretos oscuros!",
    welcomeTitle: "¡Bienvenido a mi Portafolio Virtual!",
    welcomeMessage: "Este portafolio interactivo permite explorar mis habilidades y proyectos. Haz clic en los lados de las páginas para avanzar o retroceder asi como detecta si tu navegador esta en ingles o español.",
  },
  en: {
    headerText: "Jose Angel Colin Ortiz",
    page1Title: "Welcome",
    page1Content: "Welcome to my interactive portfolio, developed by me. Click on each corner of the page to advance or go back and learn more about my career as a developer.",
    polaroidCaption: "Passionate programmer and designer",
    page2Title: "Experience",
    page2Content: "Here you will find details about my experience and projects in software development and technology.",
    carouselTitle1: "Architectural CRM",
    carouselText1: "Employee management system for payments and attendance.",
    carouselTitle2: "Uber-like App",
    carouselText2: "Mobile application for transportation.",
    carouselTitle3: "E-commerce with Chat AI",
    carouselText3: "Online store with automated support powered by OpenAI.",
    page3Title: "Design and Creativity",
    page3Content: "My passion for design includes advanced skills in 3D modeling, video editing, and related technologies. Here are some examples:",
    designList: `
      <ul>
        <li><strong>Video Editing:</strong> Premiere Pro, After Effects.</li>
        <li><strong>3D Modeling:</strong> Blender, 3D Max, Modo13.</li>
        <li><strong>Graphic Design:</strong> Photoshop, Illustrator.</li>
        <li><strong>Other Technologies:</strong> Unity 3D, Unreal Engine.</li>
      </ul>`,
    designLibraryLink: `Discover more about my projects in my library:
      <a href="https://drive.google.com/drive/folders/1pyHa83MEUejZzkVynTI-KGDchsm_9eQ4?usp=drive_link" target="_blank">📂 My Design Library</a>`,
    page4Title: "Pokédex",
    page4Content: "Find and learn more about Pokémon using this Pokédex. I have experience working with APIs.",
    page5Title: "Tales of the Cryptozoo",
    page5Content: "Tales of the Cryptozoo is a psychological horror game entirely developed and designed by me. All the graphic design, programming, and 3D modeling were created from scratch by me to provide an immersive and unique experience. Explore the world and uncover its dark secrets!",
    welcomeTitle: "Welcome to My Virtual Portfolio!",
    welcomeMessage: "This interactive portfolio lets you explore my skills and projects. Click on the sides of the pages to navigate forward or backward as well as detecting if your web browser is in English or Spanish..",
  }
};


// Actualizar la función para incluir el contenido de la nueva página
function setLanguageContent() {
  const content = isSpanish ? textContent.es : textContent.en;

  document.getElementById("header-text").textContent = content.headerText;
  document.getElementById("page1-title").textContent = content.page1Title;
  document.getElementById("page1-content").textContent = content.page1Content;
  document.getElementById("polaroid-caption").textContent = content.polaroidCaption;
// Actualizar títulos y textos del carrusel
document.getElementById("page2-title").textContent = content.page2Title;
document.getElementById("page2-content").textContent = content.page2Content;

document.getElementById("carousel-title-1").textContent = content.carouselTitle1;
document.getElementById("carousel-text-1").textContent = content.carouselText1;

document.getElementById("carousel-title-2").textContent = content.carouselTitle2;
document.getElementById("carousel-text-2").textContent = content.carouselText2;

document.getElementById("carousel-title-3").textContent = content.carouselTitle3;
document.getElementById("carousel-text-3").textContent = content.carouselText3;
document.getElementById("page3-title").textContent = content.page3Title;
  document.getElementById("page3-content").textContent = content.page3Content;
  document.getElementById("design-list").innerHTML = content.designList;
  document.getElementById("design-library-link").innerHTML = content.designLibraryLink;
  document.getElementById("page4-title").textContent = content.page4Title;
  document.getElementById("page4-content").textContent = content.page4Content;
  document.getElementById("page5-title").textContent = content.page5Title;
  document.getElementById("page5-content").textContent = content.page5Content;
}


// Mostrar y ocultar el loader
function showLoader() {
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}

// Función para mostrar la página actual
function showPage(page) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active', 'turning-forward', 'turning-backward');
    page.style.opacity = 0;
  });

  const currentPageElement = document.getElementById('page' + page);
  currentPageElement.classList.add('active');
  currentPageElement.style.opacity = 1;

  // Oculta el loader una vez que la página está lista
  setTimeout(hideLoader, 500);
}

function nextPage() {
  if (currentPage < totalPages) {
    showLoader(); // Muestra el loader antes de cambiar de página
    const currentPageElement = document.getElementById('page' + currentPage);
    currentPageElement.classList.add('turning-forward');
    
    setTimeout(() => {
      currentPage++;
      showPage(currentPage);
    }, 800);
  }
}

function previousPage() {
  if (currentPage > 1) {
    showLoader(); // Muestra el loader antes de cambiar de página
    const currentPageElement = document.getElementById('page' + currentPage);
    currentPageElement.classList.add('turning-backward');
    
    setTimeout(() => {
      currentPage--;
      showPage(currentPage);
    }, 800);
  }
}

// Función para consultar Pokémon en la PokéAPI y mostrarlo en la Pokédex
async function fetchPokemon(pokemonName = null) {
  const searchQuery = pokemonName || document.getElementById("pokemon-search").value.toLowerCase() || "pikachu";
  const url = `https://pokeapi.co/api/v2/pokemon/${searchQuery}`;

  showLoader(); // Mostrar loader mientras se consulta

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Pokémon no encontrado");

    const data = await response.json();

    document.getElementById("pokemon-name").textContent = isSpanish ? `Nombre: ${data.name}` : `Name: ${data.name}`;
    document.getElementById("pokemon-image").src = data.sprites.front_default;
    document.getElementById("pokemon-info").textContent = isSpanish ? `Peso: ${data.weight} | Altura: ${data.height}` : `Weight: ${data.weight} | Height: ${data.height}`;

  } catch (error) {
    document.getElementById("pokemon-name").textContent = isSpanish ? "Pokémon no encontrado" : "Pokémon not found";
    document.getElementById("pokemon-image").src = "";
    document.getElementById("pokemon-info").textContent = "";
  } finally {
    hideLoader();
  }
}

// Inicializar contenido e idioma
document.addEventListener("DOMContentLoaded", () => {
  setLanguageContent();
  showPage(currentPage);
  hideLoader();
  fetchPokemon("pikachu");
});

document.getElementById('old-portfolio-btn').addEventListener('click', () => {
  window.open('https://647e4bf8fc4dd618e129681f--superb-platypus-022ed7.netlify.app/#sobre-mi', '_blank');
});

// Evento para el botón de la página Tales of the Cryptozoo
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cryptozoo-link").addEventListener("click", () => {
    window.open("https://store.steampowered.com/app/3324150/Tales_of_the_Cryptozoo/?beta=1", "_blank");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("skillsModal");
  const closeBtn = modal.querySelector(".close");
  const gearIcon = document.querySelector(".icon-container i");

  // Abrir modal al hacer clic en el engranaje
  gearIcon.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Cerrar modal al hacer clic en la "X"
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Función para actualizar el pie de página
function updateFooter() {
  const footerText = isSpanish
    ? `Página ${currentPage} de ${totalPages}`
    : `Page ${currentPage} of ${totalPages}`;
  document.getElementById("footer-text").textContent = footerText;
}

// Mostrar la página actual y actualizar el pie de página
function showPage(page) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active', 'turning-forward', 'turning-backward');
    page.style.opacity = 0;
  });

  const currentPageElement = document.getElementById('page' + page);
  currentPageElement.classList.add('active');
  currentPageElement.style.opacity = 1;

  // Oculta el loader una vez que la página está lista
  setTimeout(hideLoader, 500);

  // Actualiza el pie de página
  updateFooter();
}

// Llama a la actualización del pie de página al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  setLanguageContent();
  showPage(currentPage);
  updateFooter();
});

// Función para mostrar el modal de bienvenida
function showWelcomeModal() {
  const modal = document.getElementById("welcomeModal");
  const title = document.getElementById("welcome-title");
  const message = document.getElementById("welcome-message");
  const closeBtn = document.getElementById("welcome-close-btn");

  const content = isSpanish ? textContent.es : textContent.en;

  title.textContent = content.welcomeTitle;
  message.textContent = content.welcomeMessage;

  modal.style.display = "flex";

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguageContent();
  showPage(currentPage);
  updateFooter();
  showWelcomeModal(); // Muestra el modal al cargar la página
});
