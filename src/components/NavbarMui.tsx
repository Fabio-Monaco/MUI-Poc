import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DrawerMui } from "./DrawerMui";
import { MobileDrawerMui } from "./MobileDrawerMui";
import { useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";

export const NavbarMui = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <Grid>
      <AppBar position="relative">
        <Toolbar>
          {isMatch ? (
            <>
              <MobileDrawerMui />
              <Box
                component="img"
                sx={{
                  height: 40
                }}
                alt="Your logo."
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAABsCAMAAAD5RU8sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUdwTP///////////////////////////////////////////wB7xP////////////////////aef/D4+/////rOvP///ydjovvVxwBapo3O7P///////9Xq9Pzh1uHt9f///////wBesv////////v8/f///////wBnu/SBWP////////////j7/Pi3n////+fQXBZ4vaLV7v+yDMHj8v/kAP/lABCe2iqr3sfd6wlnq//NByZ4tO1CBEyo2OXz+fJrO//dAP/////DCIy52VW14nS+5ABZtgBitLbU6TmEulCWyQlvuOvy+CF+v//oAH+v1DiLxv/vAP/lAwBXtAButvmXHmulzkSOwBturZzD3w2Z1wKW2C+g167e8QBosQBttQBnrgCZ1wBZtv/xAP/vAPmcG//bAQBeoABfnv/qAABVtwCV1wGS1PBfKRaIyQBVuPaNHP/aAfyuFfSDHvBaIQBVtwRQmACCyKvK4gCV1f/uAPN6IPuvFAB3vwByuGPC5wSEy//gAPz9/f/JCABVt12UwABXt9Di77fR45C42PWjhP////FZIgCa2f/YAf/aAP/lAP/fAP/jAP/pAP/VAvqgG/WAH/mcHP/tAABmqgBstQBipQBvugBgoPunGvqkGviZHPaMH/ysGPiWHveUHveRHvePH/aJH/2yFvyvF/V8IPupGQBuuP/wAPaEIP22FP25Ev67Ef/BDv/EDf++EP/HC//NB/NwIfRzIf/TBP/QBfR2IfR5IPNtIPNqIvJkIu86AABqsfJiIfFfIvJoIu8/AAB4wf/cAAB/xwBorv/gAAB0vgCJ0PFXHgCGywCN0f/rAPBOFPFcJe9EBQCQ1PBJDP/KCvaHHwCY2PFUGvaGHwCDyf/KCQBKmACU1gBOogBXn/3q4wBUru4yAP7y7fiojPNzRPR6S/aVcfrBqvmzlPNkB/aNZf/59/rHsgA9j/3fz/FOAfV5CvJWBfNpNPRsAvJjLveKCPvJnPijUfaNT/mzb/WDM+wcAPR4HxXhj0wAAACMdFJOUwD7jhJLv8L+ZVb1Yf5RNqBxlf77H/7aBf789+Tt+P74es3+QSz4BQv+/oT6sv7+qwv6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"
              />
              <Typography
                sx={{ color: "yellow", fontSize: "1.5rem", flexGrow: 1 }}
              >
                Mob App
              </Typography>
            </>
          ) : (
            <>
              <DrawerMui />
              <Box
                component="img"
                sx={{
                  height: 60
                }}
                alt="Your logo."
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAABsCAMAAAD5RU8sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUdwTP///////////////////////////////////////////wB7xP////////////////////aef/D4+/////rOvP///ydjovvVxwBapo3O7P///////9Xq9Pzh1uHt9f///////wBesv////////v8/f///////wBnu/SBWP////////////j7/Pi3n////+fQXBZ4vaLV7v+yDMHj8v/kAP/lABCe2iqr3sfd6wlnq//NByZ4tO1CBEyo2OXz+fJrO//dAP/////DCIy52VW14nS+5ABZtgBitLbU6TmEulCWyQlvuOvy+CF+v//oAH+v1DiLxv/vAP/lAwBXtAButvmXHmulzkSOwBturZzD3w2Z1wKW2C+g167e8QBosQBttQBnrgCZ1wBZtv/xAP/vAPmcG//bAQBeoABfnv/qAABVtwCV1wGS1PBfKRaIyQBVuPaNHP/aAfyuFfSDHvBaIQBVtwRQmACCyKvK4gCV1f/uAPN6IPuvFAB3vwByuGPC5wSEy//gAPz9/f/JCABVt12UwABXt9Di77fR45C42PWjhP////FZIgCa2f/YAf/aAP/lAP/fAP/jAP/pAP/VAvqgG/WAH/mcHP/tAABmqgBstQBipQBvugBgoPunGvqkGviZHPaMH/ysGPiWHveUHveRHvePH/aJH/2yFvyvF/V8IPupGQBuuP/wAPaEIP22FP25Ev67Ef/BDv/EDf++EP/HC//NB/NwIfRzIf/TBP/QBfR2IfR5IPNtIPNqIvJkIu86AABqsfJiIfFfIvJoIu8/AAB4wf/cAAB/xwBorv/gAAB0vgCJ0PFXHgCGywCN0f/rAPBOFPFcJe9EBQCQ1PBJDP/KCvaHHwCY2PFUGvaGHwCDyf/KCQBKmACU1gBOogBXn/3q4wBUru4yAP7y7fiojPNzRPR6S/aVcfrBqvmzlPNkB/aNZf/59/rHsgA9j/3fz/FOAfV5CvJWBfNpNPRsAvJjLveKCPvJnPijUfaNT/mzb/WDM+wcAPR4HxXhj0wAAACMdFJOUwD7jhJLv8L+ZVb1Yf5RNqBxlf77H/7aBf789+Tt+P74es3+QSz4BQv+/oT6sv7+qwv6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"
              />

              <Typography
                ml={2}
                mr={2}
                variant="h4"
                component="div"
                sx={{ flexGrow: 1 }}
                color="yellow"
              >
                Desktop App
              </Typography>

              <Stack direction={"row"}>
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
                    onClick={() =>
                      window.open("https://twitter.com/igtnews", "_blank")
                    }
                  />
                </IconButton>
              </Stack>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
