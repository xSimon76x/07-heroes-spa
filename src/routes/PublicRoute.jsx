import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  
    const { logged } = useContext( AuthContext );
    
    // TODO Valido si el usuario no esta logeado, no me dejara ir al login, si estoy ya logeado
    
    return ( !logged ) ? children : <Navigate to="/marvel" />

}
