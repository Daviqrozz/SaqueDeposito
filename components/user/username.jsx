import React from 'react';

const UserName = ({ color }) => {
    const username = 'Nome do usuário';

    return (
        <div>
            <h1 style={{ color }}>{username}</h1>
        </div>
    );
};

export default UserName;