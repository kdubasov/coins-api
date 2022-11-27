import React from 'react';
import {Badge, Button, Placeholder} from "react-bootstrap";
import {getTheme} from "../../../functions/Theme/getTheme";
import {getLang} from "../../../functions/Lang/getLang";

const UserData = ({user,handleLogout}) => {

    // console.log(user);

    return (
        <div className={`UserData ${getTheme(true)}`}>

            <header>
                {//photo
                    user.photoURL ?
                        <img
                            className={"user-photo"}
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
                <div className={"text-container"}>
                    <h5>
                        {user.email && "Email: "}
                        {user.phoneNumber && "Phone: "}
                        <strong>{user.email || user.phoneNumber}</strong>
                    </h5>
                    <p className={"small"}>
                        ID: <Badge>{user.uid && (user.uid.slice(0,12) + '...')}</Badge>
                    </p>
                    {
                        user.metadata?.creationTime &&
                        <p className={"small"}>
                            {getLang() === "eng" && "Account created: "}
                            {getLang() === "rus" && "Аккаунт создан: "}
                            <Badge>{user.metadata.creationTime}</Badge>
                        </p>
                    }
                </div>
            </header>

            <div className="buttons-container">
                <Button size={"sm"} onClick={handleLogout} variant={"danger"}>
                    {getLang() === "eng" && "Log out"}
                    {getLang() === "rus" && "Выйти из аккаунта"}
                </Button>
                <Button size={"sm"} onClick={handleLogout} variant={"primary"}>
                    {getLang() === "eng" && "Favorites"}
                    {getLang() === "rus" && "Избранное"}
                </Button>
            </div>
        </div>
    );
};

export default UserData;
