import React, { useState } from 'react';
import '../styles/valor.css';

const Valor = () => {
   

    return (
        <div className='deposit_container'>
            <div>
                <h1>Depósito</h1>
            </div>
            
            <div className='qrcode_container'>

            </div>
            <div className='deposit_content'>
                   <form >
                <label>
                    Valor:
                    <input
                        type="number"
                    />
                </label>
                <div className='deposit_button'>
                        <button type="submit">Depositar</button>
                </div>
            
            </form>
            </div>
         
        </div>
    );
};

export default Valor;