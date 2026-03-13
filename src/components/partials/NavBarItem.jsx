import { useKnightMode } from "../context/KnightModeContext";

export default function NavBarItem({ link, knightText, text }) {
  const { knightMode } = useKnightMode();
  return (
    <li className="">
      <a className={"knightSplit"} href={link}>
        {knightMode ? knightText : text}
      </a>
    </li>
  );
}
