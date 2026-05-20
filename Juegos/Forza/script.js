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

                
    ]
    }
    ],

    'Bugatti': [
        {
            logo: 'Imagenes/logos/Bugatti.png',
            autos: [
                
    ]
    }
    ],

    'Chevrolet': [
        {
            logo: 'Imagenes/logos/chevrolet.png',
            autos: [
                
                
    ]
     }
    ],

    'Dodge': [
        {
            logo: 'Imagenes/logos/dodge.png',
            autos: [
               

            ]
        }
    ],

    'Ferrari': [
        {
            logo: 'Imagenes/logos/ferrari.svg',
            autos: [
             
            ]
        }
    ],
    'Ford': [
        {
            logo: 'Imagenes/logos/ford.svg',
            autos: [
                
            ]
        }
    ],
    'Jaguar': [
        {
            logo: 'Imagenes/logos/Jaguar.png',
            autos: [
               
            ]
        }
    ],
    'Koenigsegg': [
        {
            logo: 'Imagenes/logos/koenigsegg.png',
            autos: [
              
            ]
        }
    ],
    'Lamborghini': [
        {
            logo: 'Imagenes/logos/lamborghini.svg',
            autos: [
               
            ]
        }
    ],
    'Lola': [
        {
            logo: 'Imagenes/logos/lola.png',
            autos: [
                
            ]
        }
    ],
    'McLaren': [
        {
            logo: 'Imagenes/logos/mclaren.svg',
            autos: [
              
            ]
        }
    ],
    'Mercedes-AMG': [
        {
            logo: 'Imagenes/logos/Mercedes-AMG.svg',
            autos: [
               { nombre: 'Mercedes-AMG One 2021 ', imagen: 'Imagenes/superRuleta/FH6/Mercedes-AMG/AMG ONE.png' }
            ]
        }
    ],
    'Mercedes-Benz': [
        {
            logo: 'Imagenes/logos/Mercedes-Benz.svg',
            autos: [
               
            ]
        }
    ],
    'MG': [
        {
            logo: 'Imagenes/logos/mg.png',
            autos: [
              
            ]
        }
    ],
    'Napier': [
        {
            logo: 'Imagenes/logos/Napier.png',
            autos: [
              
            ]
        }
    ],
    'Nissan': [
        {
            logo: 'Imagenes/logos/Nissan.png',
            autos: [
              
            ]
        }
    ],
    'Pagani': [
        {
            logo: 'Imagenes/logos/Pagani.png',
            autos: [
             
            ]
        }
    ],
    'Peel': [
        {
            logo: 'Imagenes/logos/Peel.png',
            autos: [
             
            ]
        }
    ],
    'Pontiac': [
        {
            logo: 'Imagenes/logos/Pontiac.png',
            autos: [
               
            ]
        }
    ],
    'Porsche': [
        {
            logo: 'Imagenes/logos/Porsche.png',
            autos: [
               
            ]
        }
    ],
    'Rimac': [
        {
            logo: 'Imagenes/logos/Rimac.png',
            autos: [
               
            ]
        }
    ],
    'Shelby': [
        {
            logo: 'Imagenes/logos/Shelby.png',
            autos: [
               
            ]
        }
    ],
    'Zenvo': [
        {
            logo: 'Imagenes/logos/Zenvo.png',
            autos: [
                
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



