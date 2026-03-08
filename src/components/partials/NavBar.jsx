import NavBarItem from "./NavBarItem";

import './NavBar.css'

const links = [
    {id:1, text: 'About', link: '#about'},
    {id:2, text: 'Skills', link: '#skills'},
    {id:3, text: 'Project', link: '#projects'},
    {id:4, text: 'Contact', link: '#contact'}
]

export default function NavBar(){
    return(
        <nav id="main-nav" className="nav-links flex flex-row justify-between p-5 px-10 my-auto mt-0">
            <a href="">x</a>
            <ul className="flex flex-row gap-4">
                {links.map(link =>(
                    <NavBarItem key={link.id} {...link}/>
                ))}
            </ul>
        </nav>
    )
}