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
            logo: 'imagenes/Forza/logos/audi.svg',
            autos: [


            ]
        }
    ],


    'BMW': [
        {
            logo: 'imagenes/Forza/logos/bmw.svg',
            autos: [

                { nombre: '2011 BMW X5 M Forza Edition', imagen: 'imagenes/Forza/superRuleta/BMW/bmw FE.png' }
    ]
    }
    ],

    'Bugatti': [
        {
            logo: 'imagenes/Forza/logos/bugatti.jpg',
            autos: [
                { nombre: 'Bugatti Divo', imagen: 'imagenes/Forza/superRuleta/Bugatti/Divo.png' }
    ]
    }
    ],

    'Chevrolet': [
        {
            logo: 'imagenes/Forza/logos/chevrolet.svg',
            autos: [
                { nombre: 'Chevrolet Charger R/T Forza Edition', imagen: 'imagenes/Forza/superRuleta/Chevrolet/Charger RT.PNG' },
                { nombre: 'Chevrolet Corvette Forza Edition', imagen: 'imagenes/Forza/superRuleta/Chevrolet/Corvette FE.png' }
    ]
     }
    ],

    'Dodge': [
        {
            logo: 'imagenes/Forza/logos/dodge.svg',
            autos: [


            ]
        }
    ],

    'Ferrari': [
        {
            logo: 'imagenes/Forza/logos/ferrari.svg',
            autos: [
                { nombre: '1967 Ferrari #24 Spa P4', imagen: 'imagenes/Forza/superRuleta/Ferrari/SPA.png' },
                { nombre: '1962 Ferrari 250 GTO', imagen: 'imagenes/Forza/superRuleta/Ferrari/250GTO.png' },
                { nombre: '2018 Ferrari F8 Tributo', imagen: 'imagenes/Forza/superRuleta/Ferrari/F8 Tributo.png' }
            ]
        }
    ],
    'Ford': [
        {
            logo: 'imagenes/Forza/logos/ford.svg',
            autos: [
                { nombre: 'Ford Mustang Hoonigan Edition', imagen: 'imagenes/Forza/superRuleta/Ford/Mustang Hoonigan.png' },
                { nombre: 'Ford Focus Hoonigan', imagen: 'imagenes/Forza/superRuleta/Ford/Focus Hoonigan.png' },
                { nombre: 'Ford Racing Puma', imagen: 'imagenes/Forza/superRuleta/Ford/Racing Puma.png' }
            ]
        }
    ],
    'Jaguar': [
        {
            logo: 'imagenes/Forza/logos/jaguar.svg',
            autos: [
                { nombre: 'Jaguar D-Type', imagen: 'imagenes/Forza/superRuleta/Jaguar/D-Type.png' }
            ]
        }
    ],
    'Koenigsegg': [
        {
            logo: 'imagenes/Forza/logos/koenigsegg.svg',
            autos: [
                { nombre: 'Koenigsegg Agera RS', imagen: 'imagenes/Forza/superRuleta/koenigsegg/Agera RS.png' }
            ]
        }
    ],
    'Lamborghini': [
        {
            logo: 'imagenes/Forza/logos/lamborghini.svg',
            autos: [
                { nombre: 'Lamborghini Reventon', imagen: 'imagenes/Forza/superRuleta/lamborghini/Reventon.png' },
                { nombre: 'Lamborghini Revuelto', imagen: 'imagenes/Forza/superRuleta/lamborghini/Revuelto.png' },
                { nombre: 'Lamborghini Sc20', imagen: 'imagenes/Forza/superRuleta/lamborghini/SC20.png' },
                { nombre: 'Lamborghini Veneno', imagen: 'imagenes/Forza/superRuleta/lamborghini/Veneno.png' },
                { nombre: 'Lamborghini Sian Roadster', imagen: 'imagenes/Forza/superRuleta/lamborghini/Sian Roadster.png' },
                { nombre: 'Lamborghini Sesto Elemento Forza Edition', imagen: 'imagenes/Forza/superRuleta/lamborghini/Sesto Elemento FE.png' }
            ]
        }
    ],
    'Lola': [
        {
            logo: 'imagenes/Forza/logos/lola.svg',
            autos: [
                { nombre: '1969 Lola #6 Penske Sunoco T70 MKIIIB', imagen: 'imagenes/Forza/superRuleta/Lola/Lola Carreras.png' }
            ]
        }
    ],
    'McLaren': [
        {
            logo: 'imagenes/Forza/logos/mclaren.svg',
            autos: [
                { nombre: 'Mclaren p1', imagen: 'imagenes/Forza/superRuleta/McLaren/P1.png' },
                { nombre: '2019 Mclaren Senna', imagen: 'imagenes/Forza/superRuleta/McLaren/Senna.png' }
            ]
        }
    ],
    'Mercedes-AMG': [
        {
            logo: 'imagenes/Forza/logos/mercedes-amg.svg',
            autos: [
                { nombre: 'Mercedes AMG One', imagen: 'imagenes/Forza/superRuleta/Mercedes-AMG/AMG ONE.png' }
            ]
        }
    ],
    'Mercedes-Benz': [
        {
            logo: 'imagenes/Forza/logos/mercedes-benz.svg',
            autos: [
                { nombre: 'Mercedes Benz #24 TankPool24 Racing Truck Forza Edition', imagen: 'imagenes/Forza/superRuleta/Mercedes-Benz/Camion FE.png' },
                { nombre: 'Mercedes Benz AMG CLK GTR Forza Edition', imagen: 'imagenes/Forza/superRuleta/Mercedes-Benz/CLK FE.png' }
            ]
        }
    ],
    'MG': [
        {
            logo: 'imagenes/Forza/logos/mg.svg',
            autos: [
                { nombre: 'MG Metro 6R4', imagen: 'imagenes/Forza/superRuleta/MG/Metro 6R4.png' }
            ]
        }
    ],
    'Napier': [
        {
            logo: 'imagenes/Forza/logos/napier.svg',
            autos: [
                { nombre: 'Napier Railton', imagen: 'imagenes/Forza/superRuleta/Napier/Railton.png' }
            ]
        }
    ],
    'Nissan': [
        {
            logo: 'imagenes/Forza/logos/nissan.svg',
            autos: [
                { nombre: 'Nissan Fairlady Z Forza Edition', imagen: 'imagenes/Forza/superRuleta/Nissan/Fairlady FE.png' }
            ]
        }
    ],
    'Pagani': [
        {
            logo: 'imagenes/Forza/logos/pagani.svg',
            autos: [
                { nombre: 'Pagani Huayra BC', imagen: 'imagenes/Forza/superRuleta/Pagani/Pagani Huayra BC.png' },
                { nombre: 'Pagani Zonda Roadster', imagen: 'imagenes/Forza/superRuleta/Pagani/Pagani Zonda Roadster.png' }
            ]
        }
    ],
    'Peel': [
        {
            logo: 'imagenes/Forza/logos/peel.svg',
            autos: [
                { nombre: 'Peel P50', imagen: 'imagenes/Forza/superRuleta/Peel/P50.png' }
            ]
        }
    ],
    'Pontiac': [
        {
            logo: 'imagenes/Forza/logos/pontiac.svg',
            autos: [
                { nombre: 'Pontiac Trans Am Forza Edition', imagen: 'imagenes/Forza/superRuleta/Pontiac/Trans Am FE.png' }
            ]
        }
    ],
    'Porsche': [
        {
            logo: 'imagenes/Forza/logos/porsche.svg',
            autos: [
                { nombre: 'Porsche 917 LH', imagen: 'imagenes/Forza/superRuleta/Porsche/917 LH.png' },
                { nombre: 'Porsche 911 Carrera RS', imagen: 'imagenes/Forza/superRuleta/Porsche/911 Carrera RS.png' }
            ]
        }
    ],
    'Rimac': [
        {
            logo: 'imagenes/Forza/logos/rimac.svg',
            autos: [
                { nombre: 'Rimac Concept Two', imagen: 'imagenes/Forza/superRuleta/Rimac/Concept Two.png' }
            ]
        }
    ],
    'Shelby': [
        {
            logo: 'imagenes/Forza/logos/shelby.svg',
            autos: [
                { nombre: 'Shelby Cobra', imagen: 'imagenes/Forza/superRuleta/Shelby/Cobra.png' }
            ]
        }
    ],
    'Zenvo': [
        {
            logo: 'imagenes/Forza/logos/zenvo.svg',
            autos: [
                { nombre: 'Zenvo TSR-S', imagen: 'imagenes/Forza/superRuleta/Zenvo/TSR-S.png' }
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



