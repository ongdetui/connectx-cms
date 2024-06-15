"use client";

import styled from "@emotion/styled";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Header from "./components/header";

const P = styled.p`
  font-weight: 400;
`;

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Drawer
        variant="permanent"
        sx={{
          width: "20%",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "20%",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <ListItemButton className="mt-4">
            <ListItem disablePadding>
              <p className="text-[19px] text-primary font-bold">Quản trị hệ thống</p>
            </ListItem>
          </ListItemButton>
        </Box>
        <Divider />
        <Box sx={{ overflow: "auto" }}>
          
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <div className="top-tab">sdfsdf</div>
    </Box>
  );
}
