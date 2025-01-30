import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/style.scss'

import LoginPage from './login/loginpage'

function Home() {
    return (
        <div className="container-home">
            <LoginPage></LoginPage>

            <div className="image-section">
            </div>
        </div>
    );
}

export default Home;  