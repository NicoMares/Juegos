// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ? 
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});

// Catálogo de autos por marca 
const autosPorMarca = {
    'Audi': [
        {
            logo: 'Imagenes/logos/audi.png',
            autos: [


            ]
        }
    ],


    'BMW': [
        {
            logo: 'Imagenes/logos/bmw.svg',
            autos: [

                { nombre: '2011 BMW X5 M Forza Edition', imagen: 'Imagenes/superRuleta/BMW/bmw FE.png' }
    ]
    }
    ],

    'Bugatti': [
        {
            logo: 'Imagenes/logos/Bugatti.png',
            autos: [
                { nombre: 'Bugatti Divo', imagen: 'Imagenes/superRuleta/Bugatti/Divo.png' }
    ]
    }
    ],

    'Chevrolet': [
        {
            logo: 'Imagenes/logos/chevrolet.png',
            autos: [
                
                { nombre: 'Chevrolet Corvette Forza Edition', imagen: 'Imagenes/superRuleta/Chevrolet/Corvette FE.png' }
    ]
     }
    ],

    'Dodge': [
        {
            logo: 'Imagenes/logos/dodge.png',
            autos: [
                { nombre: 'Dodge Charger R/T Forza Edition', imagen: 'Imagenes/superRuleta/Dodge/Charger FE.PNG' },

            ]
        }
    ],

    'Ferrari': [
        {
            logo: 'Imagenes/logos/ferrari.svg',
            autos: [
                { nombre: '1967 Ferrari #24 Spa P4', imagen: 'Imagenes/superRuleta/Ferrari/SPA.png' },
                { nombre: '1962 Ferrari 250 GTO', imagen: 'Imagenes/superRuleta/Ferrari/250GTO.png' },
                { nombre: '2018 Ferrari F8 Tributo', imagen: 'Imagenes/superRuleta/Ferrari/F8 Tributo.png' }
            ]
        }
    ],
    'Ford': [
        {
            logo: 'Imagenes/logos/ford.svg',
            autos: [
                { nombre: 'Ford Mustang Hoonigan Edition', imagen: 'Imagenes/superRuleta/Ford/Mustang Hoonigan.png' },
                { nombre: 'Ford Focus Hoonigan', imagen: 'Imagenes/superRuleta/Ford/Focus Hoonigan.png' },
                { nombre: 'Ford Racing Puma', imagen: 'Imagenes/superRuleta/Ford/Racing Puma.png' }
            ]
        }
    ],
    'Jaguar': [
        {
            logo: 'Imagenes/logos/Jaguar.png',
            autos: [
                { nombre: 'Jaguar D-Type', imagen: 'Imagenes/superRuleta/Jaguar/D-Type.png' }
            ]
        }
    ],
    'Koenigsegg': [
        {
            logo: 'Imagenes/logos/koenigsegg.png',
            autos: [
                { nombre: 'Koenigsegg Agera RS', imagen: 'Imagenes/superRuleta/koenigsegg/Agera RS.png' }
            ]
        }
    ],
    'Lamborghini': [
        {
            logo: 'Imagenes/logos/lamborghini.svg',
            autos: [
                { nombre: 'Lamborghini Reventon', imagen: 'Imagenes/superRuleta/lamborghini/Reventon.png' },
                { nombre: 'Lamborghini Revuelto', imagen: 'Imagenes/superRuleta/lamborghini/Revuelto.png' },
                { nombre: 'Lamborghini Sc20', imagen: 'Imagenes/superRuleta/lamborghini/SC20.png' },
                { nombre: 'Lamborghini Veneno', imagen: 'Imagenes/superRuleta/lamborghini/Veneno.png' },
                { nombre: 'Lamborghini Sian Roadster', imagen: 'Imagenes/superRuleta/lamborghini/Sian Roadster.png' },
                { nombre: 'Lamborghini Sesto Elemento Forza Edition', imagen: 'Imagenes/superRuleta/lamborghini/Sesto Elemento FE.png' }
            ]
        }
    ],
    'Lola': [
        {
            logo: 'Imagenes/logos/lola.png',
            autos: [
                { nombre: '1969 Lola #6 Penske Sunoco T70 MKIIIB', imagen: 'Imagenes/superRuleta/Lola/Lola Carreras.png' }
            ]
        }
    ],
    'McLaren': [
        {
            logo: 'Imagenes/logos/mclaren.svg',
            autos: [
                { nombre: 'Mclaren p1', imagen: 'Imagenes/superRuleta/McLaren/P1.png' },
                { nombre: '2019 Mclaren Senna', imagen: 'Imagenes/superRuleta/McLaren/Senna.png' }
            ]
        }
    ],
    'Mercedes-AMG': [
        {
            logo: 'Imagenes/logos/Mercedes-AMG.svg',
            autos: [
                { nombre: 'Mercedes AMG One', imagen: 'Imagenes/superRuleta/Mercedes-AMG/AMG ONE.png' }
            ]
        }
    ],
    'Mercedes-Benz': [
        {
            logo: 'Imagenes/logos/Mercedes-Benz.svg',
            autos: [
                { nombre: 'Mercedes Benz #24 TankPool24 Racing Truck Forza Edition', imagen: 'Imagenes/superRuleta/Mercedes-Benz/Camion FE.png' },
                { nombre: 'Mercedes Benz AMG CLK GTR Forza Edition', imagen: 'Imagenes/superRuleta/Mercedes-Benz/CLK FE.png' }
            ]
        }
    ],
    'MG': [
        {
            logo: 'Imagenes/logos/mg.png',
            autos: [
                { nombre: 'MG Metro 6R4', imagen: 'Imagenes/superRuleta/MG/Metro 6R4.png' }
            ]
        }
    ],
    'Napier': [
        {
            logo: 'Imagenes/logos/Napier.png',
            autos: [
                { nombre: 'Napier Railton', imagen: 'Imagenes/superRuleta/Napier/Railton.png' }
            ]
        }
    ],
    'Nissan': [
        {
            logo: 'Imagenes/logos/Nissan.png',
            autos: [
                { nombre: 'Nissan Fairlady Z Forza Edition', imagen: 'Imagenes/superRuleta/Nissan/Fairlady FE.png' }
            ]
        }
    ],
    'Pagani': [
        {
            logo: 'Imagenes/logos/Pagani.png',
            autos: [
                { nombre: 'Pagani Huayra BC', imagen: 'Imagenes/superRuleta/Pagani/Pagani Huayra BC.png' },
                { nombre: 'Pagani Zonda Roadster', imagen: 'Imagenes/superRuleta/Pagani/Pagani Zonda Roadster.png' }
            ]
        }
    ],
    'Peel': [
        {
            logo: 'Imagenes/logos/Peel.png',
            autos: [
                { nombre: 'Peel P50', imagen: 'Imagenes/superRuleta/Peel/P50.png' }
            ]
        }
    ],
    'Pontiac': [
        {
            logo: 'Imagenes/logos/Pontiac.png',
            autos: [
                { nombre: 'Pontiac Trans Am Forza Edition', imagen: 'Imagenes/superRuleta/Pontiac/Trans Am FE.png' }
            ]
        }
    ],
    'Porsche': [
        {
            logo: 'Imagenes/logos/Porsche.png',
            autos: [
                { nombre: 'Porsche 917 LH', imagen: 'Imagenes/superRuleta/Porsche/917 LH.png' },
                { nombre: 'Porsche 911 Carrera RS', imagen: 'Imagenes/superRuleta/Porsche/911 Carrera RS.png' }
            ]
        }
    ],
    'Rimac': [
        {
            logo: 'Imagenes/logos/Rimac.png',
            autos: [
                { nombre: 'Rimac Concept Two', imagen: 'Imagenes/superRuleta/Rimac/Concept Two.png' }
            ]
        }
    ],
    'Shelby': [
        {
            logo: 'Imagenes/logos/Shelby.png',
            autos: [
                { nombre: 'Shelby Cobra', imagen: 'Imagenes/superRuleta/Shelby/Cobra.png' }
            ]
        }
    ],
    'Zenvo': [
        {
            logo: 'Imagenes/logos/Zenvo.png',
            autos: [
                { nombre: 'Zenvo TSR-S', imagen: 'Imagenes/superRuleta/Zenvo/TSR-S.png' }
            ]
        }
    ]
}; // FIN De Marcas

document.getElementById('volver-marcas').onclick = function() {
    document.getElementById('marcas').style.display = 'grid';
    document.getElementById('autos-marca').innerHTML = '';
    this.style.display = 'none';
};

window.mostrarAutos = function(marca) {
    const contenedor = document.getElementById('autos-marca');
    contenedor.innerHTML = '';
    document.getElementById('marcas').style.display = 'none';
    document.getElementById('volver-marcas').style.display = 'block';
    const autos = autosPorMarca[marca][0].autos;
    if (autos && autos.length > 0) {
        autos.forEach(auto => {
            contenedor.innerHTML += `
                <div class="vehiculos-caja">
                    <img src="${auto.imagen}" class="vehiculos-logo" alt="High performance car ${auto.nombre}"> 
                    <p>${auto.nombre}</p>
                </div>
            `;
        });
    } else {
        contenedor.innerHTML = '<p>No hay autos para esta marca 🥲.</p>';
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const marcasDiv = document.getElementById('marcas');
    const marcasOrdenadas = Object.keys(autosPorMarca).sort();

    marcasDiv.innerHTML = '';
    marcasOrdenadas.forEach(marca => {
        const logo = autosPorMarca[marca][0].logo;
        marcasDiv.innerHTML += `
            <div class="marca-card" onclick="mostrarAutos('${marca}')">
                <img src="${logo}" alt="${marca} logo" class="marca-logo">
                <span class="marca-nombre">${marca}</span>
            </div>
        `;
    });
});



