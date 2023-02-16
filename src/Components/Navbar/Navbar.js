import { Button, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import { Nav, Flex, Avatar } from "./style";

const Navbar = ({ path }) => {
  return (
    <Nav>
      <Flex>
        <div>{path}</div>
        <Avatar />
      </Flex>
    </Nav>
  );
};

export default Navbar;
