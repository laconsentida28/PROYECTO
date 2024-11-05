// fetch('/json/datos2.json')
// .then(Response =>Response.json())
// .then(data=> {
//  let resultados=document.getElementById('resultados');
//  data.forEach(usuario => {
   //  resultados.innerHTML += `<p>nombre:${usuario.nombre},edad:${usuario.edad},cuidad:${usuario.cuidad}`;
//  });   
// })
// .catch(error => console.error('error al cargar el archico JSON: ', error));

fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        let resultados = document.getElementById('resultados');
        data.results.forEach(usuario => {
            resultados.innerHTML += `<p>Nombre: ${usuario.name.first} ${usuario.name.last}, Email: ${usuario.email}</p>`;
        });
    })
    .catch(error => console.error('Error al cargar los datos de la API:', error));

 

