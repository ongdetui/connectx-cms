"use client";
import { themeApp } from "@/app/configs/theme";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const ToolbarApp = styled(Toolbar)`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 11px;
  font-weight: 600;
  color: ${themeApp.palette.customColor.primary};
  padding-left: 8px;
`;

const FLex = styled(Stack)`
  flex-direction: row;
  align-items: center;
  padding: 0px 8px 0px 8px;
`;

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      color="default"
      classes={{ colorDefault: "#F9F9F9" }}
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <ToolbarApp disableGutters>
          <Image width={62} height={56} src={"/svg/logo.svg"} alt="logo" priority />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="" onClick={handleOpenUserMenu}>
              <FLex
                height={40}
                borderRadius={20}
                color={themeApp.palette.customColor.primary}
                border={1}
              >
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
                <Title>Tổng Giám Đốc</Title>
              </FLex>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </ToolbarApp>
      </Container>
    </AppBar>
  );
};

export default Header;
