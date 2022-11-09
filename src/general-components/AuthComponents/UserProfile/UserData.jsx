import React from 'react';
import {Badge, Button, Placeholder} from "react-bootstrap";

const UserData = ({user,handleLogout}) => {
    return (
        <div className="box w-50 border p-3">

            {//photo
                (user && user.photoURL) ?
                <img
                    style={{height:100,width:100}}
                    src={user.photoURL}
                    alt={user.email || user.phoneNumber}
                /> :
                <Placeholder as="p" animation="glow">
                    <Placeholder
                        style={{height:100,width:100}}
                        alt={user.email || user.phoneNumber}
                    />
                </Placeholder>
            }

            {/*email\phoneNumber and uid*/}
            <h5 className={'mb-2'}>
                <Badge bg={"secondary"}>
                    {user && (user.email || user.phoneNumber)}
                </Badge>
                <br />
                <Badge>
                    {user.uid && (user.uid.slice(0,12) + '...')}
                </Badge>
            </h5>

            <Button size={"sm w-100"} onClick={handleLogout}>
                Выйти из аккаунта
            </Button>
        </div>
    );
};

export default UserData;
