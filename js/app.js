function cambiarTitulo() {
  console.log("desde la funcion cambiar titulo");
  //traer mi titulo h1
  // const tituloPrincipal = document.getElementsByTagName('h1')//te devuelve un array
  const tituloPrincipal = document.querySelector("h1"); //te devuelve un objeto, solo el primero que encuentra
  console.log(tituloPrincipal);
  // tituloPrincipal.innerText = 'Hola mundo 🌍'
  tituloPrincipal.innerHTML = "<b>Hola</b> mundo 🌍"; //para poder poner etiquetas HTML
  tituloPrincipal.className = "text-info display-4";
  console.log(tituloPrincipal);
  // const parrafos = document.getElementById('parrafoDestacado')
  const parrafos = document.querySelector("#parrafoDestacado"); //#porque el id en css se llama con #
  console.log(parrafos);
  // const botones = document.getElementsByClassName('btn-outline-info')
  const botones = document.querySelectorAll(".btn"); //se pone el . porque las class en css se llaman con . y el all te devuelve todos los class btn
  console.log(botones);
}

function crearParrafo() {
  if (btnVerMas.innerText === "Ver mas...") {
    console.log("desde la funcion crearParrafo");
    //1- crear el elemento nuevo
    const parrafoNuevo = document.createElement("p"); //<p> </p>
    //2- preparar parrafo
    parrafoNuevo.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla tempore praesentium similique commodi voluptatibus excepturi, explicabo necessitatibus repellat dignissimos tenetur, autem eaque veniam error at nesciunt? Eligendi impedit, delectus dicta incidunt totam cumque, voluptas aliquid sapiente nam ratione suscipit ullam repellendus vel ipsum deserunt, repellat explicabo adipisci saepe dignissimos!";
    parrafoNuevo.className = "lead"; //vemos luego una alternativa de classname
    //3- insertar elemento en el DOM
    const contenedorPadre = document.getElementById("contenedorPadre");
    //  contenedorPadre.appendChild(parrafoNuevo) //agrega el nodo al final como ultimo hijo
    //  contenedorPadre.prepend(parrafoNuevo)//agrega el nodo al principio
    contenedorPadre.insertBefore(parrafoNuevo, btnVerMas);
    btnVerMas.innerText = "Ocultar";
    btnVerMas.classList.remove("btn-outline-info");
    btnVerMas.classList.add("btn-danger");
    //  btnVerMas.className('btn btn-danger')
  } else {
    console.log(contenedorPadre.children);
    contenedorPadre.removeChild(contenedorPadre.children[2])
    btnVerMas.innerText = 'Ver mas...'
    btnVerMas.classList.remove("btn-danger");
    btnVerMas.classList.add("btn-outline-info");
  }
}

//1- buscar el boton ver mas
const btnVerMas = document.querySelector(".btn-outline-info");
console.log(btnVerMas);

//2- agregar el evento
//el segundo argumento si la funcion no tiene parametros va solo el nombre, caso contrario hay que usar una funcion anonima
btnVerMas.addEventListener("click", crearParrafo);
