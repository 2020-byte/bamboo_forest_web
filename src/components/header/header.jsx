import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({logout}) => {

    const onClick = () => {
        logout();
    }

    return (
        <Navbar className={styles.navbar} expand="lg">
        <Container >
            <Navbar.Brand href="/">UBCO Bamboo Forest🎋</Navbar.Brand>
            
            
            <div className={styles.nav}>
                <Nav.Link>
                    <Link to="/post?c=notification" className={styles.link}>
                        <i className="fa-solid fa-bell"></i>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/post?c=history" className={styles.link}>
                        <i className="fa-solid fa-clock-rotate-left"></i>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/post?c=bookmark" className={styles.link}>
                        <i className="fa-solid fa-bookmark"></i>
                    </Link>
                </Nav.Link>
                <NavDropdown className={styles.dropdown} title={<i className="fa-solid fa-ellipsis"></i>} id="basic-nav-dropdown" align="end">
                <NavDropdown.Item>
                    <Link to="/profile" className={styles.dropdownLink}>Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <Link to='/report' className={styles.dropdownLink}>
                        Report
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <Link to="/post_view_settings" className={styles.dropdownLink}>Post view settings</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to="/edit_my_information" className={styles.dropdownLink}>Edit My Information</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <Link to="/login" onClick={onClick} className={styles.dropdownLink}>
                        Sign Out
                    </Link>
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                    <Link to="/write" className={styles.link}>
                        <i className="fa-solid fa-pencil"></i>
                    </Link>
                </Nav.Link>
            </div>
            
        </Container>
        </Navbar>
        
    )
}

export default Header;