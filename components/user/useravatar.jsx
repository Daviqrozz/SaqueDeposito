import React from 'react';
import '../../styles/main.css';


const UserAvatar = ({ avatarUrl }) => {
    return (
        <div className="user-avatar">
            <img className='user-image' src={avatarUrl} />
        </div>
    );
};

export default UserAvatar;