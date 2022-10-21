import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../contexts/UserAuthContext";

const Login = () => {

  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/userProfile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <div className="p-4 box border w-50 mx-auto">

        <GoogleButton
            className="w-100 g-btn mb-3"
            type="dark"
            onClick={handleGoogleSignIn}
        />

        <Link to="/phoneLogin">
            <Button variant="success" className={'w-100 p-2'}>
              Sign in with Phone
            </Button>
        </Link>

      </div>
  );
};

export default Login;
