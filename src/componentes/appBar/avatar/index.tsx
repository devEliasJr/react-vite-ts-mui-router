import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAuthContext } from "../../../contexts/auth/authContext";

const AvatarSettings = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { signOut } = useAuthContext();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Configurações</MenuItem>
          <MenuItem onClick={signOut}>Sair</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default AvatarSettings;
