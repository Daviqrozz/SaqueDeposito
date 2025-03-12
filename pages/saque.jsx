import React, { useState } from 'react';

const Saque = () => {
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(1000); // Example initial balance

    const handleWithdraw = () => {
        if (amount > 0 && amount <= balance) {
            setBalance(balance - amount);
            setAmount('');
        } else {
            alert('Invalid amount');
        }
    };

    return (
        <div>
            <h1>Saque</h1>
            <p>Saldo: {balance}</p>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Digite o valor"
            />
            <button onClick={handleWithdraw}>Sacar</button>
        </div>
    );
};

export default Saque;