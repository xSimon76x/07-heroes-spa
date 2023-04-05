import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/routes/PrivateRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en el <Private />', () => {

    test('debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Juan Carlos'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                {/* initialEntries --> es para inicializar la ruta actual en la que me encuentro */}
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute> 
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    });

})
