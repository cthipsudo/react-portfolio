export default function NavBarItem({ link, text }) {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
}
