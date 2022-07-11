import React, {Fragment, useState} from 'react'
import Header from './componentes/Header';
import Body from './componentes/Body';
import Result from './componentes/Result'
import Spinner from './componentes/Spinner';

function App() {
  const [cant, saveCant] = useState(0);
  const [select, selectForm] = useState('');
  const [total, saveTotal] = useState(0);
  const [loadspinner, enableSpinner] = useState(false);


  let component;

  if(loadspinner){
    component = <Spinner/>
  }else if(total>0){
    component = <Result total = {total} select = {select}  cant = {cant}/>
  }else{
    component = <p>Agrega una cantidad y plazo para cotizar</p>;
  }
  

  return (
    //<Fragment> or <div className="App"> are equals
    <Fragment> 
      <Header
        titulo = "Cotizador de Seguros"
      />
      <div className='container'>
        <Body
          cant = {cant}
          saveCant = {saveCant}
          select = {select}
          selectForm = {selectForm}
          saveTotal = {saveTotal}
          enableSpinner = {enableSpinner}
        />

          <div className='mensajes'>
            {component}
          </div>
      </div>
    </Fragment>   
  );
}

export default App;
