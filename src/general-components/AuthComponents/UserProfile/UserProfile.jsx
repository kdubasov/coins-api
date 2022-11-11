import React from "react";
import {Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import UserData from "./UserData";
import FeedbackForm from "../../FeedbackForm/FeedbackForm";

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
            <UserData user={user} handleLogout={handleLogout} />
        }

        <FeedbackForm />

    </Container>
  );
};

export default UserProfile;
