import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useKnightMode } from "../context/KnightModeContext";

import NavBarItem from "./NavBarItem";
import "./NavBar.css";

// Consume anywhere without prop drilling

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "transparent",
      "& + .MuiSwitch-track": {
        backgroundColor: "#c8922a",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath fill='%239B9B9B' d='M29.85 2.15c.09.09.15.21.15.35v3.11c0 .25-.1.49-.28.66l-9.854 9.75-.373 1.537-1.56.376L20.5 19.5l1.57 2.57-2.28 1.53-3.793-3.752-4.167 4.122-1.9-1.9L19 11zM2.15 2.15 9 7.5l5.066 6.566L13.5 15.5l-1.37.523L2.28 6.28A.95.95 0 0 1 2 5.61V2.5c0-.14.06-.26.15-.35'/%3E%3Cpath fill='%23D3D3D3' d='M29.855 2.145A.5.5 0 0 0 29.5 2h-3.11c-.25 0-.49.1-.67.28l-9.717 9.827L6.28 2.28A.95.95 0 0 0 5.61 2H2.5a.5.5 0 0 0-.355.145l11.92 11.92L8.03 20.17l1.9 1.9zM22.07 22.07l-4.137-4.138 1.937-1.916 4.11 4.154z'/%3E%3Cpath fill='%23321B41' d='m3.66 26.44 1.9 1.9 5.32-5.32-1.9-1.9zM28.34 26.44l-1.9 1.9-5.32-5.32 1.9-1.9z'/%3E%3Cpath fill='%23635994' d='m2.4 27.71 1.9 1.9c.52.52 1.37.52 1.9 0s.53-1.37 0-1.9l-1.9-1.9c-.52-.53-1.37-.53-1.9 0-.53.52-.53 1.37 0 1.9M29.6 27.71l-1.9 1.9c-.52.52-1.37.52-1.9 0s-.53-1.37 0-1.9l1.9-1.9c.52-.53 1.37-.53 1.9 0 .53.52.53 1.37 0 1.9'/%3E%3Cpath fill='%23533566' d='M22.97 17.63c-.06-.2.09-.4.3-.4h2.12c.15 0 .28.1.31.25.43 2.26-.27 4.62-1.93 6.28a7 7 0 0 1-6.28 1.93.32.32 0 0 1-.25-.31v-2.12c0-.21.2-.36.4-.3 1.49.43 3.12.01 4.23-1.1a4.33 4.33 0 0 0 1.1-4.23M9.03 17.64a4.312 4.312 0 0 0 5.25 5.35c.2-.05.4.09.4.3v2.11c0 .15-.11.28-.26.31-2.23.4-4.55-.3-6.19-1.94a7 7 0 0 1-1.93-6.28c.03-.14.16-.25.31-.25h2.12c.21 0 .36.2.3.4'/%3E%3C/svg%3E");`,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff",
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const links = [
  { id: 1, text: "About", link: "#about", knightText: "The Knight" },
  { id: 2, text: "Skills", link: "#armoury", knightText: "The Armoury" },
  { id: 3, text: "Projects", link: "#quests", knightText: "Quests" },
  { id: 4, text: "Contact", link: "#contact", knightText: "Send Word" },
];

export default function NavBar() {
  const { toggleKnightMode, gsapRef } = useKnightMode();
  const updateMode = (evt) => {
    toggleKnightMode(evt.target.checked);
  };
  return (
    <nav
      id="main-nav"
      className="nav-links flex flex-row justify-between p-5 px-10 my-auto mt-0 h-[100px]"
      ref={gsapRef}
    >
      <a href="">x</a>
      <ul className="flex flex-row gap-4">
        {links.map((link) => (
          <NavBarItem key={link.id} {...link} />
        ))}
      </ul>
      <FormGroup className="knightmode-container">
        <FormControlLabel
          className="knightmode-label"
          control={<IOSSwitch sx={{ m: 1 }} onChange={updateMode} />}
          label="Knight Mode"
        />
      </FormGroup>
    </nav>
  );
}
