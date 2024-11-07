function cambiarTitulo (){
    console.log('desde la funcion cambiar titulo')
    //traer mi titulo h1
    // const tituloPrincipal = document.getElementsByTagName('h1')//te devuelve un array
    const tituloPrincipal = document.querySelector('h1')//te devuelve un objeto, solo el primero que encuentra
    console.log(tituloPrincipal)
    // tituloPrincipal.innerText = 'Hola mundo 🌍'
    tituloPrincipal.innerHTML = '<b>Hola</b> mundo 🌍'//para poder poner etiquetas HTML
    tituloPrincipal.className = 'text-info display-4'
    console.log(tituloPrincipal)
    // const parrafos = document.getElementById('parrafoDestacado')
    const parrafos = document.querySelector('#parrafoDestacado')//#porque el id en css se llama con #
    console.log(parrafos)
    // const botones = document.getElementsByClassName('btn-outline-info')
    const botones = document.querySelectorAll('.btn')//se pone el . porque las class en css se llaman con . y el all te devuelve todos los class btn
    console.log(botones)
}