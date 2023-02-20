import React, { useState } from "react";
// material ui
import { Button, Popover, Typography } from "@mui/material";
//  global
import { ALink } from "../../global/style";
import { TbLogout } from "react-icons/tb";
//  paths
import { PATHS } from "../../Routes";
//  components
import { Nav, Flex, Avatar, PageName, Logout } from "./style";
import { useAuthContext } from './../../Context/AuthContext';

const Navbar = ({ path }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const { logout } = useAuthContext();

  return (
    <Nav>
      <Flex>
        <PageName>{path}</PageName>
        <Logout>
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
          <TbLogout style={{ cursor: "pointer" }} onClick={logout} />
        </Logout>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          sx={{ margin: "0.5rem auto" }}
        >
          <Typography
            onClick={handleClose}
            sx={{ p: 2, background: "#FFFFFF", color: "#000" }}
          >
            <ALink to={PATHS.PROFILE_DETAILS}>Profile Details</ALink>
          </Typography>
        </Popover>
      </Flex>
    </Nav>
  );
};

export default Navbar;
