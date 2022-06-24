import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthProvider = createContext();

export function Auth({ children }) {
    // if isAuthenticated is true, then homepage,aboutpage is rendered
    // if isAuthenticated is false, then loginpage,signuppage is rendered
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const [user, setUser] = React.useState({});

    const redirect = useNavigate();


    // test database
    const db = {
        user: 'hira',
        password: 'hira'
    }

    function login(data) {
        if (data) {
            if (data.username === db.user && data.password === db.password) {
                setIsAuthenticated(true);
                setUser(data.username);
                redirect('/');
            }

            else {
                alert("wrong username or password");
            }
        }
    }

    function logout() {
        setIsAuthenticated(false);
        setUser({});
    }

    return (
        <AuthProvider.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthProvider.Provider>
    );
}

//need to use useAuth hook to access the context
export function useAuth() {
    return React.useContext(AuthProvider);
}
