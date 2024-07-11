import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/loginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/panel');
    };

    return (
        <div className="login-form">
            <h2>Connexion Admin</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default LoginForm;
