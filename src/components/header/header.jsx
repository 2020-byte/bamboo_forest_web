import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({logout, onToggle, closeMenubar}) => {



    const onClick = () => {
        logout();
    }

    const toggled = () => {
        onToggle();
        closeMenubar();
    }

    return (
        <Navbar className={styles.navbar} expand="lg">
        <Container  >
            <div>
                <button className={styles.toggle} onClick={toggled} >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Navbar.Brand as="span" >
                    <Link to="home" className={styles.homelink} >UBCO Bamboo Forest🎋</Link>
                </Navbar.Brand>
            </div>
            
            
            <div className={styles.nav}>
                <Nav.Link as="div">
                    <Link to="/posts?c=notification" className={styles.link}>
                        <i className="fa-solid fa-bell"></i>
                    </Link>
                </Nav.Link>
                <Nav.Link as="div">
                    <Link to="/posts?c=history" className={styles.link}>
                        <i className="fa-solid fa-clock-rotate-left"></i>
                    </Link>
                </Nav.Link>
                <Nav.Link as="div">
                    <Link to="/posts?c=bookmark" className={styles.link}>
                        <i className="fa-solid fa-bookmark"></i>
                    </Link>
                </Nav.Link>
                <NavDropdown className={styles.dropdown} title={<i className="fa-solid fa-ellipsis"></i>} id="basic-nav-dropdown" align="end">
                <NavDropdown.Item as="div">
                    <Link to="/post_view_settings" className={styles.dropdownLink}>Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="div">
                    <Link to='/report' className={styles.dropdownLink}>
                        Report
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="div">
                    <Link to="/post_view_settings" className={styles.dropdownLink}>Post view settings</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                    <Link to="/edit_my_information" className={styles.dropdownLink}>Edit My Information</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="div">
                    <Link to="/login" onClick={onClick} className={styles.dropdownLink}>
                        Sign Out
                    </Link>
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as="div">
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