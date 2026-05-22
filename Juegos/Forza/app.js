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


        "Dodge": {
            name: "Dodge",
           
            logo: "Logos/Dodge.png"
        },


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


        "Mercedes-AMG": {
            name: "Mercedes-AMG",
        
            logo: "Logos/mercedes-amg.svg"
        },

        

          "Pagani": {
            name: "Pagani",
           
            logo: "Logos/Pagani.png"
        },

          "Porsche": {
            name: "Porsche",
           
            logo: "Logos/Porsche.png"
        },
      
          "Toyota": {
            name: "Toyota",
           
            logo: "Logos/Toyota.png"
        },

          "Honda": {
            name: "Honda",
           
            logo: "Logos/Honda.png"
        },


      
    },
    vehicles: [
      
        //ASTON MARTIN
        {
          id: "M1",
            brand: "BMW",
            name: "M1 ",
            year: 1981,
            class: "S2",
            rarity: "Legendary",
            credits: 0,
            skillPoints: 19,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/BMW/M1.png"
        },
        
        {
           
       
            
        },
        // DODGE
        {
            id: "Viper_FE",
            brand: "Dodge",
            name: "Viper GTS ",
            year: 1999,
            class: "S2",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 19,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Dodge/Viper_FE.png",
        },
        {
              id: "Charger_RT",
            brand: "Dodge",
            name: "Charger R/T",
            year: 1969,
            class: "S2",
            rarity: "Legendary",
            credits: 0,
            skillPoints: 19,
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
            class: "S2",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 19,
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
            class: "S2",
            rarity: "Legendary",
            credits: 0,
            skillPoints: 19,
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
            skillPoints: 19,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Lotus/Evija.png"
        },
     
        
        // MERCEDES-AMG
        {
            id: "amg_one_2021",
            brand: "Mercedes-AMG",
            name: "ONE",
            year: 2021,
            class: "S2",
            rarity: "Legendary",
            credits: 0,
            skillPoints: 19,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Mercedes AMG/AMG ONE.png"
        },
       
           
       
        // PAGANI
        {
           id: "Huarya-R",
            brand: "Pagani",
            name: "Huarya R",
            year: 2021,
            class: "S2",
            rarity: "Legendary",
            credits: 0,
            skillPoints: 19,
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
            class: "S2",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 19,
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
            rarity: "Legendary",
            credits: 0,
            skillPoints: 19,
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
            class: "S2",
            rarity: "Forza Edition",
            credits: 0,
            skillPoints: 19,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Toyota/Toyota_FE.png"
        },

        // Honda
        {
  id: "Nsx-R",
            brand: "Honda",
            name: "NSX-R GT ",
            year: 2005,
            class: "S2",
            rarity: "Legendary",
            credits: 0,
            skillPoints: 19,
            treePath: "Cúspide superior derecha. Requiere ventajas técnicas de velocidad e inmunidad de colisión.",
            isDlc: false,
            silhouette: "Autos/Honda/NSX-R.png"


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

// Carga Inicial del Progreso (Checklist) desde localStorage
function loadProgreso() {
    try {
        const stored = localStorage.getItem("fh6_unlocked_cars");
        if (stored) {
            const arr = JSON.parse(stored);
            unlockedCars = new Set(arr);
        }
    } catch (e) {
        console.error("Error al cargar localStorage:", e);
    }
}

// Guarda el Progreso (Checklist) en localStorage
function saveProgreso() {
    try {
        localStorage.setItem("fh6_unlocked_cars", JSON.stringify(Array.from(unlockedCars)));
    } catch (e) {
        console.error("Error al guardar en localStorage:", e);
    }
}

// Inicialización de la Aplicación al Cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    loadProgreso();
    initDOMEvents();
    renderBrandsGrid();
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

    // Botón para resetear todo el progreso
    const resetProgressBtn = document.getElementById("reset-progress-btn");
    if (resetProgressBtn) {
        resetProgressBtn.addEventListener("click", () => {
            if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso de desbloqueos?")) {
                unlockedCars.clear();
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

    // Aplicar Filtros a la Base de Datos
    let filtered = DATABASE.vehicles.filter(car => {
        // Filtro por marca seleccionada
        if (activeBrand && car.brand !== activeBrand) return false;

        // Filtro por búsqueda de texto (nombre, marca o año)
        if (searchQuery) {
            const textMatch = car.name.toLowerCase().includes(searchQuery) || 
                              car.brand.toLowerCase().includes(searchQuery) ||
                              car.year.toString().includes(searchQuery);
            if (!textMatch) return false;
        }

        // Filtro por clase de auto
        if (classFilter !== "ALL" && car.class !== classFilter) return false;

        // Filtro por rareza de auto
        if (rarityFilter !== "ALL" && car.rarity !== rarityFilter) return false;

        return true;
    });

    // Aplicar Ordenamiento
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
                // Por defecto: Alfabético por Marca y luego por Nombre
                const brandCompare = a.brand.localeCompare(b.brand);
                return brandCompare !== 0 ? brandCompare : a.name.localeCompare(b.name);
        }
    });

    // Limpiar Grid
    grid.innerHTML = "";

    // Actualizar conteo de autos mostrados
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

    // Renderizar cada auto
    filtered.forEach(car => {
        const isUnlocked = unlockedCars.has(car.id);
        const card = document.createElement("div");
        card.className = `car-card rarity-${car.rarity.toLowerCase()} ${isUnlocked ? 'unlocked-active' : ''}`;
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

            <!-- Ficha Técnica de Telemetría (Hover State) -->
            <div class="car-telemetry">
                <div class="telemetry-row">
                    <span class="telemetry-label">PRECIO DE TIENDA:</span>
                    <span class="telemetry-value text-cr">${car.credits.toLocaleString()} CR</span>
                </div>
                <div class="telemetry-row">
                    <span class="telemetry-label">PUNTOS DE HABILIDAD:</span>
                    <span class="telemetry-value text-sp">${car.skillPoints} SP</span>
                </div>
                <div class="telemetry-desc">
                    <span class="telemetry-label d-block mb-1">ÁRBOL DE MAESTRÍA:</span>
                    <p class="telemetry-text">${car.treePath}</p>
                </div>
            </div>

            <!-- Control del Checklist (Progreso) -->
            <div class="car-action-bar">
                <label class="progress-switch">
                    <input type="checkbox" class="progress-checkbox" ${isUnlocked ? 'checked' : ''}>
                    <span class="progress-slider"></span>
                    <span class="progress-status-label">${isUnlocked ? 'OBTENIDO' : 'NO OBTENIDO'}</span>
                </label>
            </div>
        `;

        // Evento del Checkbox del progreso
        const checkbox = card.querySelector(".progress-checkbox");
        const statusLabel = card.querySelector(".progress-status-label");
        
        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                unlockedCars.add(car.id);
                card.classList.add("unlocked-active");
                statusLabel.textContent = "OBTENIDO";
            } else {
                unlockedCars.delete(car.id);
                card.classList.remove("unlocked-active");
                statusLabel.textContent = "NO OBTENIDO";
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
        "Forza Edition": "Forza Edition"
    };
    return dict[rarity] || rarity;
}

// Actualiza en tiempo real el Dashboard superior de estadísticas
function updateProgressDashboard() {
    const totalVehicles = DATABASE.vehicles.length;
    const totalUnlocked = unlockedCars.size;

    // Calcular porcentajes
    const progressPercent = totalVehicles > 0 ? Math.round((totalUnlocked / totalVehicles) * 100) : 0;

    // Calcular valores invertidos
    let creditsSpent = 0;
    let skillPointsSpent = 0;

    // Calcular valores restantes
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

    // Actualizar elementos en el DOM
    const uiPercent = document.getElementById("ui-progress-percent");
    const uiBar = document.getElementById("ui-progress-bar");
    const uiCount = document.getElementById("ui-unlocked-count");
    
    const uiCreditsSpent = document.getElementById("ui-credits-spent");
    const uiPointsSpent = document.getElementById("ui-points-spent");
    
    const uiCreditsRemaining = document.getElementById("ui-credits-remaining");
    const uiPointsRemaining = document.getElementById("ui-points-remaining");

    if (uiPercent) uiPercent.textContent = `${progressPercent}%`;
    if (uiBar) uiBar.style.width = `${progressPercent}%`;
    if (uiCount) uiCount.textContent = `${totalUnlocked} / ${totalVehicles}`;
    
    if (uiCreditsSpent) uiCreditsSpent.textContent = `${creditsSpent.toLocaleString()} CR`;
    if (uiPointsSpent) uiPointsSpent.textContent = `${skillPointsSpent} SP`;
    
    if (uiCreditsRemaining) uiCreditsRemaining.textContent = `${creditsRemaining.toLocaleString()} CR`;
    if (uiPointsRemaining) uiPointsRemaining.textContent = `${skillPointsRemaining} SP`;
}
