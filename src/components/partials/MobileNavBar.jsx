import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Links as navLinks } from "../../data/Links";
import { FormGroup, FormControlLabel } from "@mui/material";
import { IOSSwitch } from "./IOSSwitch";
import { useKnightMode } from "../context/KnightModeContext";

//const navLinks = ["Home", "About", "Projects", "Contact"];

export default function MobileNavBar() {
  const { toggleKnightMode } = useKnightMode();
  const updateMode = (evt) => {
    toggleKnightMode(evt.target.checked);
  };
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(180deg, var(--black) 100%, rgb(0,0,0,0.4) 0%)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "var(--gold)" }}
            onClick={() => setOpen(true)} // 👈 toggle open
          >
            <MenuIcon />
          </IconButton>
          <FormGroup className="knightmode-container">
            <FormControlLabel
              className="knightmode-label"
              control={<IOSSwitch sx={{ m: 1 }} onChange={updateMode} />}
              label="Knight Mode"
            />
          </FormGroup>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--moss)",
            border: "1px solid rgba(200, 146, 42, 0.1)",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem key={link.id} disablePadding>
              <ListItemButton href={link.link} onClick={() => setOpen(false)}>
                <ListItemText
                  sx={{ color: "var(--gold)" }}
                  slotProps={{
                    primary: { sx: { fontFamily: '"Cinzel", serif' } },
                  }}
                  primary={link.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
