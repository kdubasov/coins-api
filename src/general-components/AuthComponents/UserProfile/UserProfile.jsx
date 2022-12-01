import React from "react";
import {Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import UserData from "./UserData";
import FeedbackForm from "../../FeedbackForm/FeedbackForm";
import {getLang} from "../../../functions/Lang/getLang";

//css
import "./UserProfile.css";

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
    <Container className={'UserProfile'}>

      <h4 className={"my-4 fw-bolder"}>
        {getLang() === "eng" && "User profile"}
        {getLang() === "rus" && "Личный кабинет"}
      </h4>

        {
            user &&
            <UserData user={user} handleLogout={handleLogout} />
        }

        {/*форма обртаной связи*/}
        <FeedbackForm showInfo={false} />

    </Container>
  );
};

export default UserProfile;
