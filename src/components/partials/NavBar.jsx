import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useKnightMode } from "../context/KnightModeContext";
import { Links as links } from "../../data/Links";

import NavBarItem from "./NavBarItem";
import "./NavBar.css";

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
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 128 128'%3E%3Cpath d='M16.77 19.75c-1 0-1.7.8-1.7 1.8v.1c-1.5 25.91 3.03 59.27 24.01 83.52 12.1 14.7 23.91 18.53 24.51 18.73 0 0 .28.09.54.09s.57-.1.57-.1c.5-.2 12.48-4.02 24.49-18.72 19.91-24.21 24.01-58.82 24.01-83.52v-.1c0-1-.8-1.8-1.7-1.8-.3 0-29.11-1-46.01-15.3-.7-.6-1.7-.6-2.4 0-17.11 14.2-46.02 15.2-46.32 15.3' style='fill:%23b0bec5'/%3E%3Cpath d='M111.49 19.75c-.3 0-29.11-1-46.01-15.3-.4-.35-.83-.45-1.24-.45h-.11v120c.27-.01.62-.11.62-.12.6-.25 12.44-4 24.44-18.7 19.91-24.21 24.01-58.82 24.01-83.52v-.1c0-1.01-.8-1.81-1.71-1.81' style='fill:%2384b0c1'/%3E%3Cpath d='M26.33 28.31c-.82 0-1.02 1.02-1.02 1.74v.1c0 19.72 3.06 47.4 19 66.71 9.6 11.75 19 14.81 19.41 14.91l.41.1.41-.1c.41-.1 9.81-3.17 19.41-14.91 15.94-19.31 19-46.89 19-66.71v-.1c0-.82-.41-1.43-1.23-1.43h.1c-.2 0-23.19-.82-36.67-12.16-1.19-.98-1.94-.2-1.94-.2C49.63 27.6 26.64 28.31 26.33 28.31' style='fill:%232f7889'/%3E%3Cpath d='M29.18 30.07c-.76 0-.94.96-.94 1.64v.1c0 18.57 2.83 44.65 17.57 62.84 8.88 11.07 17.57 13.95 17.95 14.05l.38.1.38-.1c.38-.1 9.07-2.98 17.95-14.05 14.73-18.19 17.57-44.17 17.57-62.84v-.1c0-.77-.38-1.35-1.13-1.35H99c-.19 0-21.44-.77-33.91-11.45-.94-.95-1.79-.19-1.79-.19C50.72 29.4 29.47 30.07 29.18 30.07' style='fill:%23c9e3e6'/%3E%3Cpath d='M98.89 30.36h.09c-.19 0-21.44-.77-33.91-11.45-.34-.34-.66-.46-.94-.47v90.35l.38-.1c.38-.1 9.07-2.98 17.95-14.05 14.73-18.19 17.57-44.17 17.57-62.84v-.1c-.01-.76-.38-1.34-1.14-1.34' style='fill:%23b0bec5'/%3E%3Ccircle cx='70.63' cy='14.44' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='82.21' cy='19.67' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='95.01' cy='23.21' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='108.15' cy='25.14' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='108.57' cy='36.94' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='107.02' cy='50.76' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='64.08' cy='118.11' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='75.4' cy='112.71' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='85.74' cy='102.71' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='93.81' cy='91.27' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='99.67' cy='79' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='104.27' cy='64.65' r='1.93' style='fill:%2337474f'/%3E%3Ccircle cx='70.15' cy='13.8' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='81.73' cy='19.03' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='94.53' cy='22.57' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='107.66' cy='24.5' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='108.09' cy='36.3' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='106.53' cy='50.12' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='63.6' cy='117.47' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='74.92' cy='112.07' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='85.26' cy='102.07' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='93.33' cy='90.63' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='99.19' cy='78.36' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='103.79' cy='64.01' r='1.93' style='fill:%23b9e4ea'/%3E%3Ccircle cx='57.97' cy='14.44' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='46.39' cy='19.67' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='33.59' cy='23.21' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='20.45' cy='25.14' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='20.02' cy='36.94' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='21.58' cy='50.76' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='53.19' cy='112.71' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='42.86' cy='102.71' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='34.79' cy='91.27' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='28.92' cy='79' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='24.33' cy='64.65' r='1.93' style='fill:%232f7889'/%3E%3Ccircle cx='57.54' cy='13.8' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='45.95' cy='19.03' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='33.16' cy='22.57' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='20.02' cy='24.5' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='19.59' cy='36.3' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='21.15' cy='50.12' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='52.76' cy='112.07' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='42.42' cy='102.07' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='34.36' cy='90.63' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='28.49' cy='78.36' r='1.93' style='fill:%23eee'/%3E%3Ccircle cx='23.89' cy='64.01' r='1.93' style='fill:%23eee'/%3E%3C/svg%3E");`,
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
      width: "77%",
      height: "40%",
      margin: "auto",
      top: 0,
      bottom: 0,
      right: 5,
    },
  },
}));

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
