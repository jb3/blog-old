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

let summarySweep = keyframes`
  0%    {opacity: 0; transform: translateX(-30px)}
  100%  {opacity: 1; transform: translateX(0)}
`

let detailsCss = css`
line-break: anywhere;

&[open] summary ~ * {
  animation: ${summarySweep} .75s ease-in-out;
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

interface IndexQueryData {
  data: {
    projectData: {
      edges: {
        node: {
          excerpt: string;
          frontmatter: {
            title: string;
            slug: string;
          };
        };
      }[];
    };
    pgpKey: {
      childPlainText: {
        content: string;
      }
    },
    siteMeta: {
      siteMetadata: {
        siteUrl: string;
        contactMail: string;
      };
    };
  }
};

const IndexPage = ({
  data: {
    projectData: { edges },
    pgpKey: {
      childPlainText: { content: pgpKey }
    },
    siteMeta: {
      siteMetadata: { siteUrl, contactMail }
    }
  }
}: IndexQueryData) => {
  const [members, setMembers] = useState(PYDIS_MEMBERS_DEFAULT);

  useEffect(() => {
    fetch("https://discord.com/api/v9/invites/python?with_counts=1")
      .then(resp => resp.json())
      .then(data => setMembers(Math.floor(data.approximate_member_count / 1000) * 1000))
  }, []);

  return (
    <Page title="Home">
      <title>Home</title>
      <h1>
        Hey! I'm <span css={headerStyle}>Joe</span>
      </h1>

      <p>
        I'm a second year Computer Science student at the{" "}
        <a href="https://cs.nott.ac.uk">University of Nottingham</a>.
      </p>

      <p>
        I've got interests in several areas of Computer Science, but primarily
        work on web development. I'm also interested in networking (particularly
        DNS, BGP and similar technologies) and computer vision.
      </p>

      <p>
        I'm a co-founder of{" "}
        <a href="https://pythondiscord.com/">Python Discord</a>, one of the
        largest programming communities on the planet with over {members.toLocaleString()} members.
        I also administrate the hobbyist network{" "}
        <Link to="/AS211224">AS211224 (JB3)</Link>, more details can be found on
        the AS211224 home page.
      </p>

      <p>I'm best contacted through email, <a href={`mailto:${contactMail}`}>{contactMail}</a>, preferably encrypted with the below PGP key.</p>

      <details css={detailsCss}>
        <summary css={{ cursor: "pointer" }}>PGP Key 🔑</summary>
        <p>Import from <a href="/pgp.txt">{siteUrl}/pgp.txt</a>, or alternatively copy the following into your PGP client of choice:</p>
        <pre>{pgpKey}</pre>
      </details>

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
  query IndexQueries {
    projectData: allMdx {
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

    pgpKey: file(sourceInstanceName: {eq: "static-files"}, name: {eq: "pgp"}) {
        childPlainText {
          content
      }
    }

    siteMeta: site {
      siteMetadata {
        siteUrl
        contactMail
      }
    }
  }
`;

export default IndexPage;
