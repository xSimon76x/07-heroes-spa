import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "../../../src/ui";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))


describe('Pruebas en <Navbar />', () => {

    const logout = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: ' Juan carlos'
            },
            logout
        }

        beforeEach(() => jest.clearAllMocks());
    
    test('debe de mostrar el nombre del usuario', () => {
        
        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={ contextValue }>
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Juan carlos')).toBeTruthy();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {

        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={ contextValue }>
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const onLogout = screen.getByRole('button', { name: 'onLogout'})
        fireEvent.click(onLogout);

        expect( contextValue.logout ).toHaveBeenCalled();

        expect( mockedUseNavigate ).toHaveBeenCalledWith('login', {"replace": true})


    });
    

});