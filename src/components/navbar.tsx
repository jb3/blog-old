import * as React from "react"

import icon from "../images/icon.png";

import { Link } from "gatsby";

import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

const navBarStyles = {
    display: "flex",
    alignItems: "center"
}

const logoStyles = {
    width: "3em",
    height: "3em",
    paddingRight: "10px"
}

const nameStyles = {
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "black",
    textDecoration: "none"
}

const iconStyles = {
    fontSize: "1.5em"
}

const NAVBAR_ITEMS = [
    {
        "title": "Home",
        "href": "/"
    },
    {
        "title": "Projects",
        "href": "/projects"
    },
    {
        "title": "AS211224",
        "href": "/AS211224"
    },
]

const SOCIALS = [
    {
        Icon: FaTwitter,
        to: "https://twitter.com/JoeBanksDev"
    },
    {
        Icon: FaGithub,
        to: "https://github.com/jb3"
    },
    {
        Icon: FaDiscord,
        to: "https://discord.gg/python"
    }
]

export default function NavBar({ location }: {location: Location}) {
    return <div style={navBarStyles}>
        <img src={icon} style={logoStyles}/>
        {
            NAVBAR_ITEMS.map(v => {
                return location.pathname === v.href ? <Link to={v.href} style={{...nameStyles, textDecoration: "underline"}} key={v.title}>{v.title}</Link> : <Link to={v.href} style={nameStyles} key={v.title}>{v.title}</Link>
            })
        }
        <div style={{flexGrow: 1}}></div>
        {
            SOCIALS.map(acc => <a href={acc.to} style={{...nameStyles, ...iconStyles}} key={acc.to}><acc.Icon/></a>)
        }
    </div>
}
