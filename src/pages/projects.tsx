import * as React from "react"

import { Link } from "gatsby";

import Page from "../layouts/page";

import "../styles/global.css";

const ProjectPage = ({ location }: { location: any}) => {
  return (
    <Page title="Projects" location={location}>
      <h1>Projects</h1>
      <ul>
        <li>Python Discord</li>
        <li><Link to="/AS211224">AS211224</Link></li>
      </ul>
    </Page>
  )
}

export default ProjectPage
