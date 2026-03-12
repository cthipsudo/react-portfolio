import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import NavBarItem from "./NavBarItem";

import "./NavBar.css";
import { useContext } from "react";
import { useKnightMode } from "../context/KnightModeContext";

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
      color: "#fff",
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
  { id: 1, text: "About", link: "#about" },
  { id: 2, text: "Skills", link: "#armoury" },
  { id: 3, text: "Projects", link: "#quests" },
  { id: 4, text: "Contact", link: "#contact" },
];
const knightLinks = [
  { id: 1, text: "The Knight", link: "#about" },
  { id: 2, text: "The Armoury", link: "#armoury" },
  { id: 3, text: "Quests", link: "#quests" },
  { id: 4, text: "Send Word", link: "#contact" },
];

export default function NavBar() {
  const { knightMode, setKnightMode } = useKnightMode();
  const updateMode = (evt) => {
    setKnightMode(evt.target.checked);
  };
  return (
    <nav
      id="main-nav"
      className="nav-links flex flex-row justify-between p-5 px-10 my-auto mt-0"
    >
      <a href="">x</a>
      <ul className="flex flex-row gap-4">
        {knightMode
          ? knightLinks.map((link) => <NavBarItem key={link.id} {...link} />)
          : links.map((link) => <NavBarItem key={link.id} {...link} />)}
        {}
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
