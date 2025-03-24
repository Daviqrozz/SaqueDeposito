import React from 'react';
import '../styles/home.css';
function Home() {
    return (
        <div className='deposit_container'>
            <h1>Login</h1>
            <form className='login_form'>
                <div className='username_box'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>

                <div className='passowrd_box'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>

                <div className='button_box'> 
                    <button type="submit">Login</button>
                </div>
                
            </form>
        </div>
    );
}

export default Home;