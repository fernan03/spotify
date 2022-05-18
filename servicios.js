//Pasos para consumir un ai con js puro

//Declaro la URI
const URI="https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz/top-tracks?market=US"

//Declaro los parametros de la peticion (que voy a hacer)
const TOKEN="Bearer BQBfTRjyT037niiEr5ZYvr7xqzT9F2zJyuCvVI_NzHj5aZ8piHEREtmD5RQsRNRfDAHYCM3aYlcuePecOfsWxWAUaih0RlHYzhxt69dlUZ_SEYnpmwkyyfaUkKtPVJNWRvG38tZuZ2Jp1O26M3b-0wGqJ2Z6nzPSD9U"
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

// Declaro el fetch (voy al servidor)
/*
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //Respuesta es un objeto con atributos
     console.log(respuesta.tracks) //Es un arreglo de objetos (Ya se puede jugar a buscarlos objetos dentro del arreglo)
    //console.log(respuesta.tracks[0].preview_url) //Es un arreglo de objeto(Ya se puede jugar a buscar los objetos dentro del arreglo)
    /*respuesta.tracks.forEach(function(tracks){
        console.log(tracks.preview_url)
        
    });
    pintarCanciones(respuesta.tracks)

   // preview_url
}) 
.catch(function(respuesta){
    console.log(respuesta)
}) 

//Funcion para recorrer un areglo
function pintarCanciones(canciones){

    let fila=document.getElementById("fila")
   canciones.forEach(function(cancion){
       //console.log(cancion)
       console.log(cancion.name)
       console.log(cancion.preview_url)
       console.log(cancion.album.images[0].url)

       //Rutina para llenado
       let columna=document.createElement("div")
       columna.classList.add("col")

       let tarjeta=document.createElement("div")
       tarjeta.classList.add("card","h-100","shadow")

       let nombre=document.createElement("h5")
       nombre.classList.add("text-center")
       nombre.textContent=cancion.name

       let foto=document.createElement("img")
       foto.classList.add("h-100","w-100")
       foto.src=cancion.album.images[0].url

       let audio=document.createElement("audio")
       audio.classList.add("w-100")
       audio.setAttribute("controls","controls")
       audio.src=cancion.preview_url

       

       // padres e hijos
       tarjeta.appendChild(nombre)
       tarjeta.appendChild(audio)
       tarjeta.appendChild(foto)
       columna.appendChild(tarjeta)
       fila.appendChild(columna)

   })
} */

//Rutina para comsumir API con metodo POST
//1 URI para donde voy
const URIPOST="https://accounts.spotify.com/api/token"

//2 Almaceno los datos que voy a enviar
let dato1 = "grant_type=client_credentials"
let dato2 = "client_id=1abd539da667441098fc1627f8ee785c"
let dato3 = "client_secret=715eade8a1ad4854b15027df5cc0d01b"

//3 Configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
    "Content-type":"applicacion/x-www-form-urlencod"
},
    body:dato1+'&'+dato2+'&'+dato3
}

//4 voy a consumir el servicio
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.then(function(respuesta){
    console.log(respuesta)
})

