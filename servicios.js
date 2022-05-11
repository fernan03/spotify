//Pasos para consumir un ai con js puro

//Declaro la URI
const URI="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU"

//Declaro los parametros de la peticion (que voy a hacer)
const TOKEN="Bearer BQALTJTkKjf_K5KOItbro6WnrI_ck6xNHwfdjOTHrP2a9Q7aD2LDYC1P8u2jWSO-K7c7ospjdMMHbEILU1XwC7xayZg9EAZIYLsgkQ1cgRI1r47jgITrznT50hL9H2spl7T5ejgoDCpmBOyYUXv5tyJRXbjWYdGTfMg"
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

// Declaro el fetch (voy al servidor)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //Respuesta es un objeto
    console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
   // preview_url
})
.catch(function(respuesta){
    console.log(respuesta)
})