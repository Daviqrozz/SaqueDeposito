import React, { useState } from 'react';
import '../styles/valor.css';
import qrcodeimage from '../src/assets/qrcode.png';

const Valor = () => {
    const [qrcode, setQrcode] = useState('none');
    const [valor, setValor] = useState(''); // Estado para armazenar o valor do input
    const [valorSubmetido, setValorSubmetido] = useState(''); // Estado para armazenar o valor submetido

    const handleSubmit = (event) => {
        event.preventDefault();
        setValorSubmetido(valor);
        console.log('Valor digitado:', valor);


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
            <div>
                <h1>Depósito</h1>
            </div>

            {valorSubmetido > 0 && (
                <div className='qrcode_container' style={{ display: qrcode }}>
                    <img src={qrcodeimage} alt='qrcode' className='qrcode_img' />
                </div>
            )}
            <div>
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