/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, css, keyframes } from "@emotion/react";
import { useState, useEffect } from "react";

import { graphql } from "gatsby";
import Languages from "../components/languages";

import Page from "../layouts/page";

import "../styles/global.css";
import Project from "../components/project";

const PYDIS_MEMBERS_DEFAULT = 300000;

let headerAnimation = keyframes`
    0% {
        color: var(--purple);
    }

    25% {
        color: var(--slate-blue)
    }

    50% {
        color: var(--ocean-green)
    }

    75% {
        color: var(--fire-opal)
    }

    100% {
        color: var(--purple);
    }
`;

let headerStyle = css`
  animation: ${headerAnimation} 5s linear infinite;
`;

const positionStyles = css`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}: {
  data: { allMdx: { edges: Record<string, any>[] } };
}) => {
  const [members, setMembers] = useState(PYDIS_MEMBERS_DEFAULT);
    
  useEffect(() => {
      fetch("https://discord.com/api/v9/invites/python?with_counts=1")
        .then(resp => resp.json())
        .then(data => setMembers(Math.round(data.approximate_member_count / 1000) * 1000))
  }, []);

  return (
    <Page title="Home">
      <title>Home</title>
      <h1>
        Hey! I'm <span css={headerStyle}>Joe</span>
      </h1>

      <p>
        I'm a first year Computer Science student at the{" "}
        <a href="https://cs.nott.ac.uk">University of Nottingham</a>.
      </p>

      <p>
        I've got interests in several areas of Computer Science, but primarily
        work on web development. I'm also interested in networking (particularly
        DNS, BGP and similar technologies) and computer vision.
      </p>

      <p>
        In my free time, I'm an owner at{" "}
        <a href="https://pythondiscord.com/">Python Discord</a>, one of the
        largest programming communities on the planet with over 250,000 members.
        I also administrate the hobbyist network{" "}
        <Link to="/AS211224">AS211224 (JB3)</Link>, more details can be found on
        the AS211224 home page.
      </p>

      <h2>Programming languages</h2>
      <Languages />

      <h2>Projects</h2>
      <p>
        Most of my open-source projects are visible on my{" "}
        <a href="https://github.com/jb3">GitHub</a>.
      </p>
      <div css={positionStyles}>
        {edges.map((project) => (
          <Project key={project.node.frontmatter.slug} project={project.node} />
        ))}
      </div>
    </Page>
  );
};

export const query = graphql`
  query Projects {
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 220)
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
