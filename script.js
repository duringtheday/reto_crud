// Reto: CRUD
// 1. Añade un componente de tarjeta con un nombre y una descripción 
// a una página web y edítalo utilizando el DOM. 🧠
// 2. Intenta escribir el código de HTML, CSS y JS que ves en esta 
// página renderizada. No tiene que ser perfecto! 🧑‍💻 


// Option 1:
// // Seleccionar `elemento` `componente_lista`
// let componenteLista = document.getElementById('componente_lista');

// // Crear un `div` (contenedor)
// let contenedor = document.createElement('div');

// // Crear nuevo título `h3` dentro del `div`
// let nuevoTitulo = document.createElement('h3');
// nuevoTitulo.textContent = 'Componente Editado';

// // Crear nuevo párrafo `p` dentro del `div`
// let nuevoParrafo = document.createElement('p');
// nuevoParrafo.textContent = 'Es el nuevo contenido del componente';


// // Añadir nuevo `h3` y `p` al `div`
// contenedor.appendChild(nuevoTitulo);
// contenedor.appendChild(nuevoParrafo);

// // Añadir al `div` el `componente_lista`
// componenteLista.appendChild(contenedor);


// componenteLista.style.background = 'linear-gradient(150deg, #e76767, #eb8080)';



// Option 2:
// Seleccionar `elemento` `componente_lista`
let componenteLista = document.getElementById('componente_lista');

// Crear un `div` (contenedor)
let contenedor = document.createElement('div');
contenedor.innerHTML = `
<h3>Componente...</h3>
<p>Describe aquí</p>`;

// Añadir el elemento `contenedor` al `DOM` que se creó dentro
// de `componenteLista`
componenteLista.appendChild(contenedor);



// Crear un `componente1`
let componente1 = componenteLista.firstChild;
if (componente1) {
    componente1.innerHTML = `
<h3>Componente Editado</h3>
<p>Es el nuevo contenido del componente</p>`;
}

// Añadir `background` a `componenteLista`, es decir, a `#componente_Lista`
componenteLista.style.background = 'linear-gradient(150deg, #e76767, #eb8080)';