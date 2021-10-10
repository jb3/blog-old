/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, css } from "@emotion/react"
import Page from "../../layouts/page"
import { MDXRenderer } from "gatsby-plugin-mdx";


let datesStyles = css`
color: var(--greyed);
font-weight: bolder;
`;

export default function Template({
  data,
}: { data: Record<string, any> }) {
  const { mdx } = data
  const { frontmatter, body } = mdx;

  let sep = (frontmatter.dates && frontmatter.externalLink) ? "•" : "";
  return (
    <Page title={frontmatter.title}>
      <h1 style={{ marginBottom: 5 }}>{frontmatter.title}</h1>
      <span css={datesStyles}>{frontmatter.dates ? frontmatter.dates : null} {sep} </span><span><a href={frontmatter.externalLink}>{frontmatter.externalLink}</a></span>
      <MDXRenderer>{body}</MDXRenderer>
    </Page >
  )
}

export const pageQuery = graphql`
query mdxPage($id: String) {
    mdx (id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        dates
        externalLink
      }
    }
  }
`
