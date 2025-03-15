import React, { useState } from 'react';
import '../styles/valor.css';
import qrcodeimage from '../src/assets/qrcode.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const Valor = () => {

    const navigate = useNavigate();
    const handleItemClick = (path) => {
        navigate(path);
    }

    const [qrcode, setQrcode] = useState('none');
    const [valor, setValor] = useState(''); // Estado para armazenar o valor do input
    const [valorSubmetido, setValorSubmetido] = useState(''); // Estado para armazenar o valor quando e apertado o botao submetido

    const handleSubmit = (event) => {
        event.preventDefault();
        setValorSubmetido(valor);

        setQrcode('none');
        setTimeout(() => {
            setQrcode('flex');
        }, 200);
    };

    const handleInputChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <div className='deposit_container'>
            <div className='deposit_container_header'>
                <ArrowBackIosNewIcon 
                    style={{ fontSize: '30px', color: 'white',cursor: 'pointer' }} 
                    onClick={() => handleItemClick('/deposito')}
                />
                <h1>Depósito</h1>
                <p></p>
            </div>

            {valorSubmetido > 0 && (
                <div className='qrcode_container' style={{ display: qrcode }}>
                    <img src={qrcodeimage} alt='qrcode' className='qrcode_img' />
                </div>
            )}
            <div className='valor_text'>
                {valorSubmetido > 0 ? (
                    <p style={{ display: 'flex' }}>Escaneie o QR Code para depositar o valor de {valorSubmetido}R$</p>
                ) : (
                    <p>Digite um valor para gerar o QR Code</p>
                )}
            </div>
            <div className='deposit_content'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Valor:
                        <input
                            type="number"
                            value={valor}
                            onChange={handleInputChange}
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