import Link from 'next/link';
import { Container, Nav, NavItem, Button } from 'reactstrap';
import Image from 'next/image';
import {createContext, useContext} from 'react';
import AppContext from './AppContext';
const Navbar = () => {
    const {user, login, logout} = useContext(AppContext);
    console.log(user);
    return (
        <header>
            <Nav className='navbar navbar-dark bg-dark'>
                <NavItem>
                    <Link href='/'>
                        <a className='navbar-brand'>Home</a>
                    </Link>
                </NavItem>
                <NavItem className='ml-auto'>
                    <Button onClick={login}>Login/Signup</Button>
                </NavItem>
                <NavItem className='p-1'>
                    <Button onClick={logout}>Logout</Button>
                </NavItem>
            </Nav>
        </header>
    );
};
export default Navbar;