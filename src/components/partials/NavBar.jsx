import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useKnightMode } from "../context/KnightModeContext";
import { Links as links } from "../../data/Links";
import { IOSSwitch } from "./IOSSwitch";

import NavBarItem from "./NavBarItem";
import "./NavBar.css";

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
      <a className="opacity-0">x</a>
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
