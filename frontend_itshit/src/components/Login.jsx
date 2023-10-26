// Login.jsx
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import shareVideo from "../assets/share.mp4";
import logo from "../assets/logo.png";
import client from "../client";

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    const decodedToken = jwtDecode(response.credential);
    localStorage.setItem("user", JSON.stringify(decodedToken));
    const { name, sub, picture } = decodedToken;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5 text-white uppercase font-extrabold text-3xl flex items-center justify-center">
            <img src={logo} width="80px" alt="logo" />
            <span>ItShit</span>
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
              buttonText="Login"
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
