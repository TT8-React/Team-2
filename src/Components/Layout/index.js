import React from "react";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
const index = ({ path, children }) => {
  return (
    <div>
      <Navbar path={path} />
      <Main>{children}</Main>

      <SideBar />
    </div>
  );
};

export default index;
