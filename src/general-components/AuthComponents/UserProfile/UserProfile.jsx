import React from "react";
import {Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import RedactPassword from "./RedactPassword";
import UserData from "./UserData";

const UserProfile = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className={'border p-3'}>

        {
            user &&
            <>
                {/*main data about userProfile*/}
                <UserData user={user} handleLogout={handleLogout} />
                {/*redact or add password*/}
                <RedactPassword user={user} />
            </>
        }

    </Container>
  );
};

export default UserProfile;
