import React from 'react';
import {Container,Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavbarTop = () => {

    return (
        <Navbar bg="primary" variant={"dark"} className="mb-3 small">
            <Container>
                <Link style={{color:"#FFF",fontSize:20}} to={'/'}>cryptoQuick</Link>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;