//Creamos a continuación un arreglo de objetos de clase persona. La clase de 'persona' se puede utilizar dentro del arichivo 'app' dado que ambos documentos se encuentran dentro de la carpeta 'js'.

const personas = [
    new Persona ('Juan', 'Perez'),
    new Persona ('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const formulario = document.getElementById('forma');  // También se puede usar document.forms['forma'].
    const nombre = formulario['nombre']; //Es los mismo acceder al elemento del evento de la clase persona: formulario.nombre.
    const apellido = formulario['apellido'];
    if (nombre.value != '' && apellido.value != ''){
        const persona = new Persona (nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        nombre.value='';
        apellido.value='';
        mostrarPersonas();
    }
    else {
        console.log('Debe ingresar un dato tipo texto.');
        alert('Error: Debe ingresar un dato tipo texto.');
    }
}