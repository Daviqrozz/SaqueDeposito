import React from 'react';
import '../styles/deposito.css';
import { useNavigate } from 'react-router-dom';



const Deposito = () => {

    const navigate = useNavigate();

    const handleItemClick = (path) => {
        navigate(path);
        handleClose();
    };

    return (
        <div className='deposit_container'>
            <h1>Selecione o banco</h1>
            <div className='deposit_content'>
                <ul className='deposit_list'>
                    <li onClick={() => handleItemClick('/valor')}>Pix</li>
                    <li onClick={() => handleItemClick('/cartao-debito')}>Cartão de Débito</li>
                    <li onClick={() => handleItemClick('/transferencia-bancaria')}>Transferência Bancária</li>
                    <li onClick={() => handleItemClick('/cartao-credito')}>Cartao de Credito</li>
                    <li onClick={() => handleItemClick('/boleto-bancario')}>Boleto Bancário</li>
                </ul>
            </div>
        </div>
    );
};

export default Deposito;