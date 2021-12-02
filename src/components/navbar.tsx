import * as React from "react";

import icon from "../images/icon.png";

import { Link } from "gatsby";

import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaGitlab,
  FaLinkedin,
} from "react-icons/fa";

const navBarStyles = {
  display: "flex",
  alignItems: "center",
};

const logoStyles = {
  width: "3em",
  height: "3em",
  paddingRight: "10px",
};

const nameStyles = {
  paddingLeft: "10px",
  paddingRight: "10px",
  color: "black",
  textDecoration: "none",
};

const iconStyles = {
  fontSize: "1.5em",
};

const NAVBAR_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "AS211224",
    href: "/AS211224",
  },
];

const SOCIALS = [
  {
    Icon: FaTwitter,
    name: "Twitter",
    to: "https://twitter.com/JoeBanksDev",
  },
  {
    Icon: FaGithub,
    name: "GitHub",
    to: "https://github.com/jb3",
  },
  {
    Icon: FaDiscord,
    name: "Discord",
    to: "https://discord.gg/g3RsJbc5C4",
  },
  {
    Icon: FaGitlab,
    name: "GitLab",
    to: "https://gitlab.com/jb3",
  },
  {
    Icon: FaLinkedin,
    name: "LinkedIn",
    to: "https://www.linkedin.com/in/joebanks3/",
  },
];

export default function NavBar() {
  return (
    <div style={navBarStyles}>
      <img src={icon} alt="Face of Joe" style={logoStyles} />
      {NAVBAR_ITEMS.map((v) => (
        <Link
          to={v.href}
          style={nameStyles}
          activeStyle={{ textDecoration: "underline", color: `var(--active)` }}
          key={v.title}
        >
          {v.title}
        </Link>
      ))}
      <div style={{ flexGrow: 1 }}></div>
      {SOCIALS.map((acc) => (
        <a href={acc.to} style={{ ...nameStyles, ...iconStyles }} key={acc.to} aria-label={acc.name}>
          <acc.Icon />
        </a>
      ))}
    </div>
  );
}
