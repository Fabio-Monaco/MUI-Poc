import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const DrawerMui = () => {
  const [isDrwOpen, setisDrawerOpen] = useState(false);
  const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setisDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrwOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        {/* <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            <div>Menu</div>
            <div>Contacts</div>
            <div>SiteMap</div>
          </Typography>
        </Box> */}
      </Drawer>
    </>
  );
};
