import Link from 'next/link';
import { Container, Nav, NavItem } from 'reactstrap';
import Image from 'next/image';
const Navbar = () => {
    return (
        <header>
            <Nav className='navbar navbar-dark bg-dark'>
                <NavItem>
                    <Link href='/'>
                        <a className='navbar-brand'>Home</a>
                    </Link>
                </NavItem>
                <NavItem className='ml-auto'>
                    <Link href='/register'>
                        <a className='nav-link'>Sign up</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href='/login'>
                        <a className='nav-link'>Sign in</a>
                    </Link>
                </NavItem>
            </Nav>
        </header>
    );
};
export default Navbar;