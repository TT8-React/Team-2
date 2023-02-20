import React, { useState } from "react";

//  global
import { ALink } from "../../global/style";
import { TbLogout } from "react-icons/tb";
//  paths
import { PATHS } from "../../Routes";
//  components
import { Nav, Flex, Avatar, PageName, Logout, Menu, MenuItem } from "./style";
//  context
import { useAuthContext } from "./../../Context/AuthContext";

const Navbar = ({ path }) => {
  const { logout } = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);

  const handleClickAvatar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav style={{ position: "relative" }}>
      <Flex>
        <PageName>{path}</PageName>
        <Logout>
          <Avatar onClick={handleClickAvatar}>
            {showMenu && (
              <Menu show={showMenu}>
                <MenuItem>
                  <ALink to={PATHS.PROFILE_DETAILS}>Profile Details</ALink>
                </MenuItem>
              </Menu>
            )}
          </Avatar>
          <TbLogout style={{ cursor: "pointer" }} onClick={logout} />
        </Logout>
      </Flex>
    </Nav>
  );
};

export default Navbar;
