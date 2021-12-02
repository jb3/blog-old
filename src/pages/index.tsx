/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, css } from "@emotion/react";

import { graphql } from "gatsby";
import Languages from "../components/languages";

import Page from "../layouts/page";

import "../styles/global.css";
import Project from "../components/project";

let headerStyle = {
  color: `var(--purple)`
}

const positionStyles = css`
position: relative;
display: flex;
flex-flow: row wrap;
justify-content: center;
`;

const IndexPage = ({ data: { allMdx: { edges } } }: { data: { allMdx: { edges: Record<string, any>[] } } }) => {
  return (
    <Page title="Home">
      <title>Home</title>
      <h1>Hey! I'm <span style={headerStyle}>Joe</span></h1>

      <p>I'm a first year Computer Science student at the <a href="https://cs.nott.ac.uk">University of Nottingham</a>.</p>

      <p>I've got interests in several areas of Computer Science, but primarily work on web development. I'm also interested in networking (particularly DNS, BGP and similar technologies) and computer vision.</p>

      <p>In my free time, I'm an owner at <a href="https://pythondiscord.com/">Python Discord</a>, one of the largest programming communities on the planet with over 250,000 members. I also administrate the hobbyist network <Link to="/AS211224">AS211224 (JB3)</Link>, more details can be found on the AS211224 home page.</p>

      <h2>Programming languages</h2>
      <Languages />

      <h2>Projects</h2>
      <p>Most of my open-source projects are visible on my <a href="https://github.com/jb3">GitHub</a>.</p>
      <div css={positionStyles}>
        {edges.map(project => <Project key={project.node.frontmatter.slug} project={project.node} />)}
      </div>
    </Page>
  )
}

export const query = graphql`
query Projects {
  allMdx {
    edges {
      node {
        excerpt
        frontmatter {
					title
          slug
        }
      }
    }
  }
}
`;

export default IndexPage
