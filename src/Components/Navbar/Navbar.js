import { Button, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import { Nav, Flex, Avatar } from "./style";

const Navbar = ({ path }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Nav>
      <Flex>
        <div>{path}</div>
        <Avatar onClick={handleClick}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "transparent",
              display: "block",
              height: "95%",
              minWidth: "46px",
              borderRadius: "50%",
            }}
          />
        </Avatar>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{ margin: "0.5rem auto" }}
        >
          <Typography sx={{ p: 2, background: "#FFFFFF", color: "#000" }}>
            Profile Details
          </Typography>
        </Popover>
      </Flex>
    </Nav>
  );
};

export default Navbar;
