/**
 * FORZA HORIZON 6 - SUPER WHEELSPIN DATABASE
 * Lógica principal de la aplicación y base de datos de vehículos.
 */

// Base de datos de Marcas y Vehículos
const DATABASE = {
    brands: {
        
           "Aston Martin": {
            name: "Aston Martin",
        
            logo: "Logos/Aston Martin.png",
      
        },
  
           "Bmw": {
            name: "Bmw",
        
            logo: "Logos/BMW.svg",
      
        },

// C
   


        "Dodge": {
            name: "Dodge",
           
            logo: "Logos/Dodge.png"
        },

        "Ferrari": {
            name: "Ferrari",
           
            logo: "Logos/Ferrari.png"
        },

         "Ford": {
            name: "Ford",
           
            logo: "Logos/Ford.png"
        },
/// G

          "Honda": {
            name: "Honda",
           
            logo: "Logos/Honda.png"
        },


        // J

        // K

         "Lamborghini": {
            name: "Lamborghini",
            
            logo: "Logos/lamborghini.svg"
        },

        "Lancia": {
            name: "Lancia",
            
            logo: "Logos/Lancia.png"
        },


        "Lotus": {
            name: "Lotus",
            
            logo:"Logos/Lotus.png"
        },



        "Mazda": {
            name: "Mazda",
        
            logo: "Logos/Mazda.png"
        },

   

        "Mercedes-AMG": {
            name: "Mercedes-AMG",
        
            logo: "Logos/mercedes-amg.svg"
        },

           "Mitsubishi": {
            name: "Mitsubishi",
        
            logo: "Logos/Mitsubishi.png"
        },


         "Nissan": {
            name: "Nissan",
        
            logo: "Logos/Nissan.png"
        },

// O

          "Pagani": {
            name: "Pagani",
           
            logo: "Logos/Pagani.png"
        },

          "Porsche": {
            name: "Porsche",
           
            logo: "Logos/Porsche.png"
        },

        // R
      
 "Subaru": {
            name: "Subaru",
           
            logo: "Logos/Subaru.png"
        },


          "Toyota": {
            name: "Toyota",
           
            logo: "Logos/Toyota.png"
        },

/// U


/// V


///W

/// Z
    

        
   
      
    },
    vehicles: [
      
        //ASTON MARTIN
        {
          id: "Vulcan",
            brand: "Aston Martin",
            name: "Vulcan",
            year: 2016,
            class: "S2",
            rarity: "Legendary",
            credits: 2300000,
            skillPoints: 0,
            treePath: "EL Aston Martin Vulcan fue un Vehiculo Regalado por forza Gracias a haber jugado al Forza Horizon 4.",
            isDlc: false,
            silhouette: "Autos/Aston Martin/Vulcan.png"
        },
        
          //BMW
        {
          id: "M1",
            brand: "Bmw",
            name: "M1 ",
            year: 1981,
            class: "B",
            rarity: "Tesoro",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/BMW/M1.png"
        },
        // DODGE
        {
            id: "Viper_FE",
            brand: "Dodge",
            name: "Viper GTS ",
            year: 1999,
            class: "A",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Dodge/Viper_FE.png",
        },
        {
              id: "Charger_RT",
            brand: "Dodge",
            name: "Charger R/T",
            year: 1969,
            class: "C",
            rarity: "Tesoro",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Dodge/Charger_RT.png"
        },

        
        // LAMBORGHINI
        {
           id: "Essenza",
            brand: "Lamborghini",
            name: "Essenza SCV",
            year: 2020,
            class: "R",
            rarity: "Legendary",
            credits: 1500000,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Lamborghini/Essenza.png"
        },
    /// Lancia
{
            id: "Stratos",
            brand: "Lancia",
            name: "Stratos HF Stradale",
            year: 1974,
            class: "C",
            rarity: "Tesoro",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Lancia/Stratos.png"
        },
        // LOTUS
        {
            id: "Evija_FE",
            brand: "Lotus",
            name: "Evija",
            year: 2021,
            class: "S2",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Lotus/Evija.png"
        },
     
        // Nissan
        {
            id: "PAO",
            brand: "Nissan",
            name: "PAO",
            year: 1989,
            class: "D",
            rarity: "Abandonado",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Nissan/PAO.png"
        },

 {
            id: "Figaro",
            brand: "Nissan",
            name: "Figaro",
            year: 1991,
            class: "D",
            rarity: "Tesoro",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Nissan/Figaro.png"
        },



        
// Mazda
        {
            id: "RX7",
            brand: "Mazda",
            name: "RX-7 GSL - SE ",
            year: 1985,
            class: "D",
            rarity: "Tesoro",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Mazda/RX7.png"
        },


        // MERCEDES-AMG
        {
            id: "amg_one_2021",
            brand: "Mercedes-AMG",
            name: "ONE",
            year: 2021,
            class: "S2",
            rarity: "Legendary",
            credits: 2800000,
            skillPoints: 0,
            treePath: "EL Mercedes AMG One fue un Vehiculo Regalado por forza Gracias a haber jugado al Forza Horizon 5.",
            isDlc: false,
            silhouette: "Autos/Mercedes AMG/AMG ONE.png"
        },
        // Mitsubishi
        {
            id: "Lancer_3",
            brand: "Mitsubishi",
            name: "Lancer Evolution III GSR",
            year: 1995,
            class: "B",
            rarity: "Tesoro",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Mitsubishi/Lancer_3.png"
        },
           
       
        // PAGANI
        {
           id: "Huarya-R",
            brand: "Pagani",
            name: "Huarya R",
            year: 2021,
            class: "R",
            rarity: "Legendary",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Pagani/Huarya-R.png"
        },
      
// PORSCHE
        {
            id: "Porsche_FE",
            brand: "Porsche",
            name: "#3 917 LH",
            year: 1970,
            class: "R",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Porsche/917_FE.png"
        },

{
            id: "Porsche_959",
            brand: "Porsche",
            name: "959 ",
            year: 1987,
            class: "A",
            rarity: "Tesoro",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Porsche/959.png"
        },

 


// Toyota
        {
             id: "Tacoma_FE",
            brand: "Toyota",
            name: "Tacoma TRD Pro",
            year: 2019,
            class: "R",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Toyota/Tacoma_FE.png"
        },

          {
             id: "2000GT",
            brand: "Toyota",
            name: "2000GT",
            year: 2019,
            class: "D",
            rarity: "Abandonado",
            credits: 0,
            skillPoints: 0,
            treePath: "Tiene 1 Super Ruletas Y 4 Normales WOW",
            isDlc: false,
            silhouette: "Autos/Toyota/2000GT.png"
        },


        // Honda
        {
  id: "Nsx-R",
            brand: "Honda",
            name: "NSX-R GT ",
            year: 2005,
            class: "A",
            rarity: "Abandonado",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Honda/NSX-R.png"


        },
/// Ferrari
         {
  id: "SF90",
            brand: "Ferrari",
            name: "SF90 Stradale ",
            year: 2020,
            class: "S2",
            rarity: "Legendary",
            credits: 575000,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Ferrari/SF90.png"
        },
        {
            id: "Spa",
            brand: "Ferrari",
            name: "# 24 Spa 330  ",
            year: 1967,
            class: "A",
            rarity: "Legendary",
            credits: 70000000,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Ferrari/Spa.png"
        },



/// Ford
                 {
  id: "Sierra",
            brand: "Ford",
            name: "Sierra Cosworth RS500 ",
            year: 1987,
            class: "C",
            rarity: "Abandonado",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Ford/Sierra.png"
        },

                        {
  id: "GT2005",
            brand: "Ford",
            name: "GT ",
            year: 2005,
            class: "A",
            rarity: "Tesoro",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Ford/GT2005.png"


        },

             {
  id: "Mustang_FE",
            brand: "Ford",
            name: "Mustang GT 2+2 Fastback ",
            year: 1968,
            class: "A",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Ford/Mustang_FE.png"


        },


        //Subaru
              {
  id: "22BSTI",
            brand: "Subaru",
            name: "22B-STi ",
            year: 1998,
            class: "S2",
            rarity: "Legendary",
            credits: 86000,
            skillPoints: 0,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Subaru/22B-STi.png"


        }
    ]
};

// Configuración de Estados Globales
let activeBrand = null;
let searchQuery = "";
let classFilter = "ALL";
let rarityFilter = "ALL";
let activeSort = "alphabetical"; // alphabetical, credits_asc, credits_desc, points_asc, points_desc, year_desc
let unlockedCars = new Set(); // Guarda los IDs de los autos desbloqueados
let masteryCompletedCars = new Set(); // Guarda los IDs de autos con maestría completa
let feedbackEntries = [];

const STORAGE_KEYS = {
    unlocked: "fh6_unlocked_cars",
    mastery: "fh6_mastery_completed_cars",
    feedback: "fh6_feedback_entries"
};

function loadSet(key, set) {
    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            const arr = JSON.parse(stored);
            if (Array.isArray(arr)) {
                set.clear();
                arr.forEach(item => set.add(item));
            }
        }
    } catch (e) {
        console.error(`Error al cargar ${key}:`, e);
    }
}

function saveSet(key, set) {
    try {
        localStorage.setItem(key, JSON.stringify(Array.from(set)));
    } catch (e) {
        console.error(`Error al guardar ${key}:`, e);
    }
}

function loadFeedbackEntries() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.feedback);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
                feedbackEntries = parsed;
            }
        }
    } catch (e) {
        console.error("Error al cargar feedback:", e);
    }
}

function saveFeedbackEntries() {
    try {
        localStorage.setItem(STORAGE_KEYS.feedback, JSON.stringify(feedbackEntries));
    } catch (e) {
        console.error("Error al guardar feedback:", e);
    }
}

function normalizeRarityKey(rarity) {
    return String(rarity || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_");
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Carga Inicial del Progreso (Checklist) desde localStorage
function loadProgreso() {
    loadSet(STORAGE_KEYS.unlocked, unlockedCars);
    loadSet(STORAGE_KEYS.mastery, masteryCompletedCars);
    loadFeedbackEntries();
}

// Guarda el Progreso (Checklist) en localStorage
function saveProgreso() {
    saveSet(STORAGE_KEYS.unlocked, unlockedCars);
    saveSet(STORAGE_KEYS.mastery, masteryCompletedCars);
}

function addFeedbackEntry(type, title, message) {
    feedbackEntries.unshift({
        id: Date.now(),
        type,
        title,
        message,
        createdAt: new Date().toISOString()
    });

    feedbackEntries = feedbackEntries.slice(0, 12);
    saveFeedbackEntries();
    renderFeedbackFeed();
}

// Inicialización de la Aplicación al Cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    loadProgreso();
    initDOMEvents();
    renderBrandsGrid();
    renderFeedbackFeed();
    renderVehicles();
    updateProgressDashboard();
});

// Eventos de DOM e Interacciones
function initDOMEvents() {
    // Input de búsqueda
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderVehicles();
        });
    }

    // Filtros de clase de auto
    const classBtns = document.querySelectorAll(".class-filter-btn");
    classBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            classBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            classFilter = btn.getAttribute("data-class");
            renderVehicles();
        });
    });

    // Filtros de rareza de auto
    const rarityBtns = document.querySelectorAll(".rarity-filter-btn");
    rarityBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            rarityBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            rarityFilter = btn.getAttribute("data-rarity");
            renderVehicles();
        });
    });

    // Filtro de Orden
    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            activeSort = e.target.value;
            renderVehicles();
        });
    }

    // Reset general de filtros
    const resetBtn = document.getElementById("reset-filters");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            searchQuery = "";
            classFilter = "ALL";
            rarityFilter = "ALL";
            activeSort = "alphabetical";
            activeBrand = null;

            // Restablecer estados visuales
            classBtns.forEach(b => b.classList.remove("active"));
            document.querySelector('.class-filter-btn[data-class="ALL"]')?.classList.add("active");
            
            rarityBtns.forEach(b => b.classList.remove("active"));
            document.querySelector('.rarity-filter-btn[data-rarity="ALL"]')?.classList.add("active");

            if (sortSelect) sortSelect.value = "alphabetical";

            document.querySelectorAll(".brand-card").forEach(c => c.classList.remove("active"));
            document.getElementById("selected-brand-title").textContent = "Todos los vehículos";

            renderVehicles();
        });
    }

    const errorForm = document.getElementById("error-feedback-form");
    if (errorForm) {
        errorForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const textarea = document.getElementById("error-message");
            const message = textarea?.value.trim();
            if (!message) return;

            addFeedbackEntry("error", "Reporte de error", message);
            if (textarea) textarea.value = "";
        });
    }

    const missingVehicleForm = document.getElementById("missing-vehicle-form");
    if (missingVehicleForm) {
        missingVehicleForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const brand = document.getElementById("missing-brand")?.value.trim();
            const name = document.getElementById("missing-name")?.value.trim();
            const notes = document.getElementById("missing-notes")?.value.trim();

            if (!brand || !name || !notes) return;

            addFeedbackEntry(
                "missing_vehicle",
                `Vehículo faltante: ${brand} ${name}`,
                `Marca: ${brand}\nModelo: ${name}\nNotas: ${notes}`
            );

            document.getElementById("missing-brand").value = "";
            document.getElementById("missing-name").value = "";
            document.getElementById("missing-notes").value = "";
        });
    }

    // Botón para resetear todo el progreso
    const resetProgressBtn = document.getElementById("reset-progress-btn");
    if (resetProgressBtn) {
        resetProgressBtn.addEventListener("click", () => {
            if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso de desbloqueos?")) {
                unlockedCars.clear();
                masteryCompletedCars.clear();
                saveProgreso();
                updateProgressDashboard();
                renderVehicles();
            }
        });
    }
}

// Helper inteligente para renderizar multimedia (SVG en línea o ruta de imagen)
function renderMedia(content, className) {
    if (!content) return '';
    const trimmed = content.trim();
    if (trimmed.startsWith('<svg') || trimmed.startsWith('<div') || trimmed.startsWith('<span')) {
        return content;
    }
    // De lo contrario, se asume que es una ruta de imagen (ej. assets/logo.png) o URL
    return `<img src="${content}" alt="Imagen" class="${className}">`;
}

function renderFeedbackFeed() {
    const container = document.getElementById("feedback-list");
    const status = document.getElementById("feedback-status");

    if (!container) return;

    if (feedbackEntries.length === 0) {
        container.innerHTML = '<p class="feedback-empty">Aún no hay reportes ni sugerencias guardadas. Sé el primero en avisar de una omisión.</p>';
        if (status) status.textContent = "Aún no hay comentarios guardados.";
        return;
    }

    container.innerHTML = feedbackEntries.map(entry => `
        <article class="feedback-entry">
            <div class="feedback-entry-header">
                <span class="feedback-entry-tag">${escapeHTML(entry.type === 'error' ? 'Reporte de error' : 'Vehículo faltante')}</span>
                <span class="feedback-entry-time">${escapeHTML(new Date(entry.createdAt).toLocaleString('es-AR'))}</span>
            </div>
            <p class="feedback-entry-message"><strong>${escapeHTML(entry.title)}</strong></p>
            <p class="feedback-entry-message">${escapeHTML(entry.message).replace(/\n/g, '<br>')}</p>
        </article>
    `).join('');

    if (status) {
        status.textContent = `${feedbackEntries.length} comentario${feedbackEntries.length === 1 ? '' : 's'} disponible${feedbackEntries.length === 1 ? '' : 's'}.`;
    }
}

// Renderizado de las Tarjetas de Marcas (Grid al estilo de la captura provista)
function renderBrandsGrid() {
    const grid = document.getElementById("brands-grid");
    if (!grid) return;

    grid.innerHTML = "";

    Object.keys(DATABASE.brands).forEach(brandKey => {
        const brand = DATABASE.brands[brandKey];
        const card = document.createElement("div");
        card.className = "brand-card";
        card.setAttribute("data-brand", brand.name);
        card.innerHTML = `
            <div class="brand-glow"></div>
            <div class="brand-logo-container">
                ${renderMedia(brand.logo, "brand-img")}
            </div>
            <span class="brand-name">${brand.name}</span>
        `;

        card.addEventListener("click", () => {
            const isAlreadyActive = card.classList.contains("active");

            // Remover clase activa de todas las tarjetas
            document.querySelectorAll(".brand-card").forEach(c => c.classList.remove("active"));

            if (isAlreadyActive) {
                activeBrand = null;
                document.getElementById("selected-brand-title").textContent = "Todos los vehículos";
            } else {
                card.classList.add("active");
                activeBrand = brand.name;
                document.getElementById("selected-brand-title").textContent = `Vehículos de ${brand.name}`;
            }

            renderVehicles();

            // Desplazarse suavemente a la grilla de autos
            document.getElementById("vehicles-section").scrollIntoView({ behavior: "smooth" });
        });

        grid.appendChild(card);
    });
}

// Renderizado Dinámico del Panel de Autos Filtrado y Ordenado
function renderVehicles() {
    const grid = document.getElementById("vehicles-grid");
    const countSpan = document.getElementById("vehicles-count");
    if (!grid) return;

    let filtered = DATABASE.vehicles.filter(car => {
        if (activeBrand && car.brand !== activeBrand) return false;

        if (searchQuery) {
            const textMatch = car.name.toLowerCase().includes(searchQuery) ||
                car.brand.toLowerCase().includes(searchQuery) ||
                car.year.toString().includes(searchQuery);
            if (!textMatch) return false;
        }

        if (classFilter !== "ALL" && car.class !== classFilter) return false;

        if (rarityFilter !== "ALL" && car.rarity !== rarityFilter) return false;

        return true;
    });

    filtered.sort((a, b) => {
        switch (activeSort) {
            case "credits_asc":
                return a.credits - b.credits;
            case "credits_desc":
                return b.credits - a.credits;
            case "points_asc":
                return a.skillPoints - b.skillPoints;
            case "points_desc":
                return b.skillPoints - a.skillPoints;
            case "year_desc":
                return b.year - a.year;
            case "alphabetical":
            default:
                const brandCompare = a.brand.localeCompare(b.brand);
                return brandCompare !== 0 ? brandCompare : a.name.localeCompare(b.name);
        }
    });

    grid.innerHTML = "";

    if (countSpan) {
        countSpan.textContent = `(${filtered.length})`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results-panel">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="no-results-icon">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <h3>Sin resultados coincidentes</h3>
                <p>Modifica los filtros seleccionados o realiza otra búsqueda.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(car => {
        const isUnlocked = unlockedCars.has(car.id);
        const isMastered = masteryCompletedCars.has(car.id);
        const rarityClass = `rarity-${normalizeRarityKey(car.rarity)}`;
        const card = document.createElement("div");
        card.className = `car-card ${rarityClass} ${isUnlocked ? 'unlocked-active' : ''} ${isMastered ? 'mastery-complete' : ''}`;
        card.setAttribute("data-id", car.id);

        card.innerHTML = `
            <div class="car-badge-container">
                <span class="class-badge class-${car.class.toLowerCase()}">${car.class}</span>
                <span class="rarity-badge">${translateRarity(car.rarity)}</span>
            </div>
            
            <div class="car-body">
                <div class="car-visuals">
                    ${renderMedia(car.silhouette, "car-img")}
                </div>
                <div class="car-header-details">
                    <span class="car-brand-name">${car.brand}</span>
                    <h3 class="car-model-name">${car.name} <span class="car-year">${car.year}</span></h3>
                </div>
            </div>

            <div class="car-telemetry">
                <div class="telemetry-row">
                    <span class="telemetry-label">PRECIO DE TIENDA:</span>
                    <span class="telemetry-value text-cr">${car.credits.toLocaleString()} CR</span>
                </div>
                <div class="telemetry-row">
                    <span class="telemetry-label">PUNTOS DE MAESTRÍA:</span>
                    <span class="telemetry-value text-sp">${car.skillPoints} SP</span>
                </div>
                <div class="telemetry-desc">
                    <span class="telemetry-label d-block mb-1">ÁRBOL DE MAESTRÍA:</span>
                    <p class="telemetry-text">${car.treePath}</p>
                </div>
            </div>

            <div class="car-action-bar">
                <div class="car-action-stack">
                    <label class="progress-switch">
                        <input type="checkbox" class="progress-checkbox" ${isUnlocked ? 'checked' : ''}>
                        <span class="progress-slider"></span>
                        <span class="progress-status-label">${isUnlocked ? 'OBTENIDO' : 'NO OBTENIDO'}</span>
                    </label>
                    <label class="mastery-switch">
                        <input type="checkbox" class="mastery-checkbox" ${isMastered ? 'checked' : ''}>
                        <span class="mastery-slider"></span>
                        <span class="mastery-status-label">${isMastered ? 'MAESTRÍA COMPLETA' : 'MAESTRÍA PENDIENTE'}</span>
                    </label>
                </div>
            </div>
        `;

        const checkbox = card.querySelector(".progress-checkbox");
        const progressLabel = card.querySelector(".progress-status-label");
        const masteryCheckbox = card.querySelector(".mastery-checkbox");
        const masteryLabel = card.querySelector(".mastery-status-label");

        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                unlockedCars.add(car.id);
                card.classList.add("unlocked-active");
                progressLabel.textContent = "OBTENIDO";
            } else {
                unlockedCars.delete(car.id);
                card.classList.remove("unlocked-active");
                progressLabel.textContent = "NO OBTENIDO";
            }
            saveProgreso();
            updateProgressDashboard();
        });

        masteryCheckbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                masteryCompletedCars.add(car.id);
                card.classList.add("mastery-complete");
                masteryLabel.textContent = "MAESTRÍA COMPLETA";
            } else {
                masteryCompletedCars.delete(car.id);
                card.classList.remove("mastery-complete");
                masteryLabel.textContent = "MAESTRÍA PENDIENTE";
            }
            saveProgreso();
            updateProgressDashboard();
        });

        grid.appendChild(card);
    });
}

// Traduce los términos de rareza para la interfaz de usuario en español
function translateRarity(rarity) {
    const dict = {
        "Common": "Común",
        "Rare": "Raro",
        "Epic": "Épico",
        "Legendary": "Legendario",
        "Forza Edition": "Forza Edition",
        "Tesoro": "Tesoro",
        "Abandonado": "Abandonado"
    };
    return dict[rarity] || rarity;
}

// Actualiza en tiempo real el Dashboard superior de estadísticas
function updateProgressDashboard() {
    const totalVehicles = DATABASE.vehicles.length;
    const totalUnlocked = unlockedCars.size;
    const masteredCount = masteryCompletedCars.size;

    const progressPercent = totalVehicles > 0 ? Math.round((totalUnlocked / totalVehicles) * 100) : 0;

    let creditsSpent = 0;
    let skillPointsSpent = 0;
    let creditsRemaining = 0;
    let skillPointsRemaining = 0;

    DATABASE.vehicles.forEach(car => {
        if (unlockedCars.has(car.id)) {
            creditsSpent += car.credits;
            skillPointsSpent += car.skillPoints;
        } else {
            creditsRemaining += car.credits;
            skillPointsRemaining += car.skillPoints;
        }
    });

    const uiPercent = document.getElementById("ui-progress-percent");
    const uiBar = document.getElementById("ui-progress-bar");
    const uiCount = document.getElementById("ui-unlocked-count");
    const uiMasteredCount = document.getElementById("ui-mastered-count");

    const uiCreditsSpent = document.getElementById("ui-credits-spent");
    const uiPointsSpent = document.getElementById("ui-points-spent");
    const uiCreditsRemaining = document.getElementById("ui-credits-remaining");
    const uiPointsRemaining = document.getElementById("ui-points-remaining");

    if (uiPercent) uiPercent.textContent = `${progressPercent}%`;
    if (uiBar) uiBar.style.width = `${progressPercent}%`;
    if (uiCount) uiCount.textContent = `${totalUnlocked} / ${totalVehicles}`;
    if (uiMasteredCount) uiMasteredCount.textContent = `${masteredCount} / ${totalVehicles}`;

    if (uiCreditsSpent) uiCreditsSpent.textContent = `${creditsSpent.toLocaleString()} CR`;
    if (uiPointsSpent) uiPointsSpent.textContent = `${skillPointsSpent} SP`;
    if (uiCreditsRemaining) uiCreditsRemaining.textContent = `${creditsRemaining.toLocaleString()} CR`;
    if (uiPointsRemaining) uiPointsRemaining.textContent = `${skillPointsRemaining} SP`;
}
