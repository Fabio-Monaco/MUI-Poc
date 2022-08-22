import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export const MobileDrawerMui = () => {
  const [isDrwOpen, setisDrawerOpen] = useState(false);
  const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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

        <Button color="inherit">Features</Button>
        <Button color="inherit">Pricing</Button>
        <Button color="inherit">About</Button>
        <Button
          color="inherit"
          id="resources-button"
          onClick={handleClick}
          aria-controls={open ? "resources-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Resources
        </Button>
        <Button color="inherit">Login</Button>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="youtube"
        >
          <YouTubeIcon
            onClick={() =>
              window.open("https://youtube.com/user/igt", "_blank")
            }
          />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="twitter"
        >
          <TwitterIcon
            onClick={() => window.open("https://twitter.com/igtnews", "_blank")}
          />
        </IconButton>

        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "resorces-button" }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Docs</MenuItem>
          <MenuItem></MenuItem>
        </Menu>
      </Drawer>
    </>
  );
};
