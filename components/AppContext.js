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
    const addItem = () => console.log("added item");
    const removeItem = () => console.log("removed item");
    const login = () => {
        netlifyIdentity.open();
    };
    const logout = () => {
        netlifyIdentity.logout();
    }
    const context = {user, cart, login, logout, removeItem, addItem};
    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user);
            netlifyIdentity.close();
            console.log('Login event');
        });
        netlifyIdentity.on('logout', () => {
            setUser(null);
        });
        // init netlify identity connection
        netlifyIdentity.init();
        return () => {
            netlifyIdentity.off('login');
            netlifyIdentity.off('logout');
        }
    }, [])
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}
export default AppContext;