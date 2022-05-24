import Footer from './Footer';
import Navbar from './Navbar';
import { Container } from 'reactstrap';
import styles from '../styles/Home.module.css';
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <Container>
                    { children }
                </Container>
            </div>
            <Footer />
        </>
    );
};
export default Layout;