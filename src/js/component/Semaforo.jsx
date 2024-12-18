import React from "react"; 
import { useState } from "react";


const Semaforo = () => {
    const {color, setColor} = useState("red")

    return(
       <div className="semaforo">
         <div onClick={() => setColor("red")} 
        className={`light ${color} === "red" ? "rojo" : "grey" `}>
        </div>
        <div onClick={() => setColor("yellow")} 
        className={` light ${color} === "yellow" ? "amarillo" : "grey" `}>
        </div>
        <div onClick={() => setColor("green")} 
        className={`light ${color} === "green" ? "verde" : "grey" `}>
        </div>
       </div>
       
    );
};
export default Semaforo; 

