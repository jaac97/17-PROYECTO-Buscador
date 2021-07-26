const marca = document.querySelector('#marca'),
    year = document.querySelector('#year'),
    minimo = document.querySelector('#minimo'),
    maximo = document.querySelector('#maximo'),
    puertas = document.querySelector('#puertas'),
    transmision = document.querySelector('#transmision'),
    color = document.querySelector('#color'),
    resultado = document.querySelector('#resultado tbody'),
    max = new Date().getFullYear(),
    min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    min: '',
    max: '',
    puertas: '',
    transmision: '',
    color: ''

}

// console.log(max)
// console.log(min)

// console.log(resultado)
const eventos = () => {
    document.addEventListener('DOMContentLoaded', () => {
        mostrarAutos(autos);
        // llenar años
        llenarSelect();

        // marca.addEventListener('change', filtrarMarca);
        // En cada evento se asigna un valor al obj
        marca.addEventListener('change', (e) => {
            datosBusqueda.marca = e.target.value;
            filtrarAuto();
            // console.log(datosBusqueda);
        })
        year.addEventListener('change', (e) => {
            datosBusqueda.year = parseInt(e.target.value);
            filtrarAuto();
            // console.log(datosBusqueda);
        })
        minimo.addEventListener('change', (e) => {
            datosBusqueda.min = parseInt(e.target.value);
            filtrarAuto();
            // console.log(datosBusqueda);
        })
        maximo.addEventListener('change', (e) => {
            datosBusqueda.max = parseInt(e.target.value);
            filtrarAuto();
            // console.log(datosBusqueda);
        })
        puertas.addEventListener('change', (e) => {
            datosBusqueda.puertas = parseInt(e.target.value);
            filtrarAuto();
            // console.log(datosBusqueda);
        })
        transmision.addEventListener('change', (e) => {
            datosBusqueda.transmision = e.target.value;
            filtrarAuto();
            console.log(datosBusqueda);
        })
        color.addEventListener('change', (e) => {
            datosBusqueda.color = e.target.value;
            filtrarAuto();
            // console.log(datosBusqueda);
        })

        // console.log(datosBusqueda);
    });
}

const llenarSelect = () => {
    for (let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}


const mostrarAutos = (arreglo) => {
    // console.log(resultado.firstChild)
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    arreglo.forEach(auto => {
        
        const row = document.createElement('tr');
        row.style.fontWeight = '400'
        row.innerHTML = `
        <td>${auto.marca}</td>
        <td>${auto.modelo}</td>
        <td>${auto.year}</td>
        <td>${auto.precio}</td>
        <td>${auto.puertas}</td>
        <td>${auto.color}</td>
        <td>${auto.transmision}</td>
        `;
        resultado.appendChild(row);
    })
 
}

const filtrarAuto = ()=>{
    const resultado2 = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    // console.log(resultado2.length);
    if(resultado2.length>0)
     mostrarAutos(resultado2);
    else{
        while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild);
        }
        const row = document.createElement('tr');
        row.style.fontWeight = '400'
        row.style.textAlign = 'center'
        row.innerHTML = `
        <td COLSPAN="7"><h2 class="centrar">No existen resultados</h2></td>
        `;
        resultado.appendChild(row)

    }
    

}

const filtrarMarca = (auto) => {
  
    if(datosBusqueda.marca){
        return auto.marca == datosBusqueda.marca
    }

    return auto;
}

const filtrarYear = (auto)=>{
    // console.log(datosBusqueda.year);
    if(datosBusqueda.year){
        return auto.year == datosBusqueda.year;
    }
    
    return auto;
}

const filtrarMin = (auto) =>{
    if(datosBusqueda.min){
        return auto.precio >= datosBusqueda.min ;
    }
    return auto;
}

const filtrarMax = (auto) =>{
    // console.log(datosBusqueda.max)
    if(datosBusqueda.max){
        return auto.precio <= datosBusqueda.max ;
    }
    return auto;
}

const filtrarPuertas = (auto) =>{
    // console.log(datosBusqueda.puertas)
    if(datosBusqueda.puertas){
        return auto.puertas == datosBusqueda.puertas ;
    }
    return auto;
}

const filtrarTransmision = (auto) =>{
    // console.log(datosBusqueda.transmision)
    if(datosBusqueda.transmision){
        return auto.transmision == datosBusqueda.transmision ;
    }
    return auto;
}


const filtrarColor = (auto) =>{

    if(datosBusqueda.color){
        return auto.color == datosBusqueda.color ;
    }
    return auto;
}
eventos();