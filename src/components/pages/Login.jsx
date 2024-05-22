import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {login} from "../../services/authServices/Login";
import '../../styles/Login.css'; // Importa los estilos CSS desde la ubicación específica

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            let loginResult = await login(email, password);
            // Login exitoso, puedes redirigir al usuario a otra página
            console.log('Login successful');
            localStorage.setItem('token', loginResult.token);
            navigate("/home")
        } catch (error) {
            // Manejo de errores de autenticación
            console.error('Login failed:', error.message);
        }
    };
    return <div className="login-container">
        <h2 className="login-title">Iniciar Sesion</h2>
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
                <label className="form-label">Usuario</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"
                       required/>
            </div>
            <div className="form-group">
                <label className="form-label">Contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       className="form-control" required/>
            </div>
            <div className="button-grid">
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </div>
        </form>
    </div>
}
export default Login;
