import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext( AuthContext );

    const onLogin = () => {

        login('Simón Bustamante');

        navigate('/', {
            replace: true
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ onLogin }
            >
                Login
            </button>
        </div>
    )
}
