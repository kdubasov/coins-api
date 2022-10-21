import React from "react";
import {Badge, Button,} from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../contexts/UserAuthContext";

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
    <div className={'w-50 mx-auto border p-3 d-flex justify-content-center flex-wrap'}>

      <h5 className={'mb-2'}>
        <Badge bg={"secondary"}>
          {user && (user.email || user.phoneNumber)}
        </Badge>
      </h5>

      <Button size={"sm w-100"} onClick={handleLogout}>
        Выйти из аккаунта
      </Button>

    </div>
  );
};

export default UserProfile;
