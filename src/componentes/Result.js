import React from 'react';

function Result({total, select, cant}){
        console.log((select))
    return(
       
        <div className='u-full-width resultado'>
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${cant}</p>
            <p>A pagar en {select} Meses</p>
            <p>Su pago mensual es de: {(total/select).toFixed(2)} </p>
            <p>Total a pagar: ${(total).toFixed(2)}</p>

            
        </div>
    )
}

export default Result;