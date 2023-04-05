import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/routes/PublicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom"



describe('Pruebas en <PublicRoute />', () => {

    test('debe de mostrar el children si no esta autenticado', () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute> 
                    <h1>Esto es una ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Esto es una ruta publica')).toBeTruthy()
    })

    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute> 
                                <h1>Esto es una ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Pagina Marvel')).toBeTruthy();
    });
    
})
