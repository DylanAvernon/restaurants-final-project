import React, { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
const AppContext = React.createContext(
    {
        cart: {
            items: [],
            total: 0,
        },
        addItem: () => {},
        removeItem: () => {},
        user: null,
        login: () => {},
        logout: () => {},
        authReady: false,
        setCart: () => {}
    });
export const AppContextProvider = ({children}) => {
    const [cart, setCart] = useState({items: [], total: 0});
    const [user, setUser] = useState(null);
    const [authReady, setAuthReady] = useState(false);
    const addItem = () => console.log("added item");
    const removeItem = () => console.log("removed item");
    const login = () => {
        netlifyIdentity.open();
    };
    const logout = () => {
        netlifyIdentity.logout();
    }
    const context = {user, cart, authReady, login, logout, removeItem, addItem};
    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user);
            netlifyIdentity.close();
        });
        netlifyIdentity.on('logout', () => {
            setUser(null);
        });
        netlifyIdentity.on('init', (user) => {
            setAuthReady(true);
            setUser(user);
        })
        // init netlify identity connection
        netlifyIdentity.init();
        return () => {
            netlifyIdentity.off('login');
            netlifyIdentity.off('logout');
            netlifyIdentity.off('init');
        }
    }, [])
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}
export default AppContext;