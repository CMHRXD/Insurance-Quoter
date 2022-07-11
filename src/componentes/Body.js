import React from 'react';
import { useState, Fragment } from 'react';
import { calculateBudget } from './Helpers';

const Body = (props) => {
    const {cant,saveCant, select, selectForm,saveTotal,enableSpinner} = props;

    const [error, errorMsg] = useState(false);
    const ValidateForm = (e)=>{
        
        e.preventDefault();
        if(cant === 0 || select === "" ){
            errorMsg(true);
            return;
        }
        errorMsg(false);

        //Show spinner
        enableSpinner(true);

        setTimeout(() => {
            saveTotal((calculateBudget(cant, select))) //Calculate Total
            enableSpinner(false);
        }, 3000);
        
    }
    return (  
        <Fragment>
            <form onSubmit={ValidateForm}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        onChange={e => saveCant(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select className="u-full-width" onChange={e => selectForm( e.target.value)}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width"
                        
                    />
                    </div>
                </div>
            </form>

            {(error) ? <p className='error'>Todos los Campos son Obligatorios</p> : null}
        </Fragment>
    );
}
 
export default Body;