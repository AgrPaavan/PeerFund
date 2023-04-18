import React from "react";
import Sidenav from "./Sidenav";
import CreateProfile from "../views/CreateProfile";
const EditProfile = () => {
  return (
    <div className="block">
      <div>
        <Sidenav />
      </div>
      <div className="w-screen">
        <CreateProfile />
      </div>
    </div>
  );
};

export default EditProfile;
