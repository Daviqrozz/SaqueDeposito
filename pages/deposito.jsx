import React from 'react';
import '../styles/deposito.css';


const Deposito = () => {

    return (
        <div className='deposit_container'>
            <h1>Deposit</h1>
            <div className='deposit_content'>
                <form>
                    <div>
                        <label>Valor do Deposito</label>
                    </div>
                    <div>
                       <input type='text' placeholder='R$ 0,00' /> 
                    </div>
                    <button>Depositar</button>
                </form>
            </div>
        </div>
    );
};

export default Deposito;