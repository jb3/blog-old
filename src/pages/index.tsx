import { Link } from "gatsby";
import * as React from "react"

import Page from "../layouts/page";

import "../styles/global.css";

let headerStyle = {
  color: `var(--purple)`
}

const IndexPage = () => {
  return (
    <Page title="Home">
      <title>Home</title>
      <h1>Hey! I'm <span style={headerStyle}>Joe</span></h1>

      <p>I'm a first year Computer Science student at the <a href="https://nottingham.ac.uk">University of Nottingham</a>.</p>

      <p>I've got interests in several areas of Computer Science, but primarily work on web development. I'm also interested in networking (particularly DNS, BGP and similar technologies) and computer vision.</p>

      <p>In my free time, I'm an owner at <a href="https://pythondiscord.com/">Python Discord</a>, one of the largest programming communities on the planet with over 250,000 members. I also administrate the hobbyist network <Link href="/AS211224">AS211224 (JB3)</Link>, more details can be found on the AS211224 home page.</p>
    </Page >
  )
}

export default IndexPage
