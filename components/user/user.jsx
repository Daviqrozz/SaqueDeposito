import React from 'react';
import UserAvatar from './useravatar';
import UserMail from './usermail';
import UserName from './username';
import download from '../../src/assets/download.png';
import '../../styles/main.css';
const User = () => {
    return (
        <div className='user-container'>
            <div>
                <UserAvatar avatarUrl={download} />
            </div>
            <div className='user_name'>
                <UserName color={'grey'} />
            </div>
            <div className='user_mail'>
                <UserMail />
            </div>

            <div className='user_balance'>
                <h3>Saldo: R$ 0,00</h3>
            </div>

        </div>
    );
};

export default User;