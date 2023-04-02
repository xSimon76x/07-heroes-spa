import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem("lastPath", lastPath);

    // TODO Valido si el usuario esta logeado, viniendo de la propiedad logged guardada en el context
    // si es asi dejaria pasar a las demas rutas, sino lo vuelvo a redirijir al login
    
    return ( logged ) ? children : <Navigate to="/login" />
}
