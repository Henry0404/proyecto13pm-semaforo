import React, { useState } from 'react';

const Semaforo = () => {

  /* const [state, setState] = useState(initialState) */
  const [colorRojo, setColorRojo] = useState("");
  const [colorVerde, setColorVerde] = useState("");
  const [colorAmarillo, setColorAmarillo] = useState("");


  const selectorBrillo = (e) => {
    if (e.target.classList.contains("rojo")) {
      setColorRojo("selected");
      setColorVerde("");
      setColorAmarillo("");
    }
    if (e.target.classList.contains("verde")) {
      setColorRojo("");
      setColorVerde("selected");
      setColorAmarillo("");
    }
    if (e.target.classList.contains("amarillo")) {
      setColorRojo("");
      setColorVerde("");
      setColorAmarillo("selected");
    }
  }
  return (

<div id="padre">
  {/* hermano del container */}
  <div id="rolo"></div>
    <div className='container'>
      <div className={`rojo circulo ${colorRojo}`} onClick={selectorBrillo} ></div>
      <div className={`verde circulo ${colorVerde}`} onClick={selectorBrillo} ></div>
      <div className={`amarillo circulo ${colorAmarillo}`} onClick={selectorBrillo} ></div>
    </div>
      </div>
  );
}


export default Semaforo;
