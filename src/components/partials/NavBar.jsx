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
  width: 52,
  height: 36,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "transparent",
      "& + .MuiSwitch-track": {
        backgroundColor: "transparent",
        opacity: 1,
        "&::before": {
          backgroundColor: "#c8922a",
        },
      },
      "&.Mui-disabled": {
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
    width: 35,
    height: 35,
    color: "transparent",
    boxShadow: "none",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath fill='%23CCD6DD' d='m24 29 5-5L6 1H1v5z'/%3E%3Cpath fill='%239AAAB4' d='M1 1v5l23 23 2.5-2.5z'/%3E%3Cpath fill='%23D99E82' d='M33.424 32.808c.284-.284.458-.626.531-.968l-5.242-6.195-.701-.702c-.564-.564-1.57-.473-2.248.205l-.614.612c-.677.677-.768 1.683-.204 2.247l.741.741 6.15 5.205c.345-.072.688-.247.974-.532z'/%3E%3Cpath fill='%23BF6952' d='M33.424 32.808c.284-.284.458-.626.531-.968l-1.342-1.586-.737 3.684c.331-.077.661-.243.935-.518zm-3.31-5.506-.888 4.441 1.26 1.066.82-4.1zm-1.401-1.657-.701-.702a1.2 1.2 0 0 0-.326-.224l-.978 4.892 1.26 1.066.957-4.783zm-2.401-.888a2 2 0 0 0-.548.392l-.614.611a2 2 0 0 0-.511.86c-.142.51-.046 1.035.307 1.387l.596.596zq0-.002 0 0'/%3E%3Ccircle cx='33.25' cy='33.25' r='2.75' fill='%238A4633'/%3E%3Cpath fill='%23FFAC33' d='M29.626 22.324a1.033 1.033 0 0 1 0 1.462l-6.092 6.092a1.033 1.033 0 1 1-1.462-1.462l6.092-6.092a1.033 1.033 0 0 1 1.462 0'/%3E%3Ccircle cx='22.072' cy='29.877' r='1.75' fill='%23FFAC33'/%3E%3Ccircle cx='29.626' cy='22.323' r='1.75' fill='%23FFAC33'/%3E%3Ccircle cx='22.072' cy='29.877' r='1' fill='%23FFCC4D'/%3E%3Ccircle cx='29.626' cy='22.323' r='1' fill='%23FFCC4D'/%3E%3Cpath fill='%23FFAC33' d='M33.903 29.342a.76.76 0 0 1 0 1.078l-3.476 3.475a.762.762 0 1 1-1.078-1.078l3.476-3.475a.76.76 0 0 1 1.078 0'/%3E%3Cpath fill='%23CCD6DD' d='m12 29-5-5L30 1h5v5z'/%3E%3Cpath fill='%239AAAB4' d='M35 1v5L12 29l-2.5-2.5z'/%3E%3Cpath fill='%23D99E82' d='M2.576 32.808a1.95 1.95 0 0 1-.531-.968l5.242-6.195.701-.702c.564-.564 1.57-.473 2.248.205l.613.612c.677.677.768 1.683.204 2.247l-.741.741-6.15 5.205a1.95 1.95 0 0 1-.974-.532z'/%3E%3Cpath fill='%23BF6952' d='M2.576 32.808a1.95 1.95 0 0 1-.531-.968l1.342-1.586.737 3.684a1.93 1.93 0 0 1-.935-.518zm3.31-5.506.888 4.441-1.26 1.066-.82-4.1zm1.401-1.657.701-.702a1.2 1.2 0 0 1 .326-.224l.978 4.892-1.26 1.066-.957-4.783zm2.401-.888c.195.095.382.225.548.392l.613.612c.254.254.425.554.511.86.142.51.046 1.035-.307 1.387l-.596.596zq0-.002 0 0'/%3E%3Ccircle cx='2.75' cy='33.25' r='2.75' fill='%238A4633'/%3E%3Cpath fill='%23FFAC33' d='M6.374 22.324a1.033 1.033 0 0 0 0 1.462l6.092 6.092a1.033 1.033 0 1 0 1.462-1.462l-6.092-6.092a1.033 1.033 0 0 0-1.462 0'/%3E%3Ccircle cx='13.928' cy='29.877' r='1.75' fill='%23FFAC33'/%3E%3Ccircle cx='6.374' cy='22.323' r='1.75' fill='%23FFAC33'/%3E%3Ccircle cx='13.928' cy='29.877' r='1' fill='%23FFCC4D'/%3E%3Ccircle cx='6.374' cy='22.323' r='1' fill='%23FFCC4D'/%3E%3Cpath fill='%23FFAC33' d='M2.097 29.342a.76.76 0 0 0 0 1.078l3.476 3.475a.762.762 0 1 0 1.078-1.078l-3.476-3.475a.76.76 0 0 0-1.078 0'/%3E%3C/svg%3E");`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "unset",
    // padding: "15px 0",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
    "&::before": {
      content: "''",
      position: "absolute",
      backgroundColor: "white",
      borderRadius: 26 / 2,
      width: "100%",
      height: "50%",
      margin: "auto",
      top: 0,
      bottom: 0,
    },
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
