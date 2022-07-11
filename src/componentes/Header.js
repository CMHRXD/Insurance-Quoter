import React from "react";

//Props es un objeto que contiene agrumentos recibidos desde el archivo App.js
function Header(props){
    return (
        <h1>{props.titulo}</h1>
    )
}

export default Header;