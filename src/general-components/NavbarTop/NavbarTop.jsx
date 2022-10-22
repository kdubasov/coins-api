import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../contexts/UserAuthContext";
import {useNavigate} from "react-router-dom";

const NavbarTop = () => {

    //user data for check login
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();

    //logout the user
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Navbar bg="primary" variant={"dark"} className="mb-3 small">
            <Container>
                <Link style={{color:"#FFF",fontSize:20}} to={'/'}>cryptoQuick</Link>

                {//check user is logged or not
                    user ?
                        <div className={'w-25 d-flex justify-content-between align-items-center'}>
                            <Link style={{color:"#FFF"}} to={'/userProfile'}>Аккаунт</Link>
                            <Button onClick={handleLogout} variant={"dark"}>Выйти</Button>
                        </div>:
                        <Link to={'/login'}>
                            <Button size={"sm"} variant={'light'}>Вход</Button>
                        </Link>
                }
            </Container>
        </Navbar>
    );
};

export default NavbarTop;