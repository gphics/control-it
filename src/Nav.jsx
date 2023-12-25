import { NavLink } from "react-router-dom"

// Link

function Nav() {
    const links = [
        { name: "Home", url: "/" },
        { name: "Bacterial", url: "/disease/bacterial" },
        { name: "Fungal", url: "/disease/fungal" },
        { name: "Viral", url: "/disease/viral" },
    ]

    function toggler() {
        const linkHolder = document.querySelector(".link-holder");
        linkHolder.classList.toggle("mobile");

    }
    return (
        <nav className="main-menu">
            <div className="hamburger" onClick={toggler}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <div className="link-holder">
                {links.map(({ name, url }, index) => {
                    return <NavLink className={({ isActive }) => isActive ? "main-menu-link active-link" : "main-menu-link"} onClick={toggler} key={index} to={url}> {name} </NavLink>
                })}
            </div>
        </nav >
    )
}

export default Nav