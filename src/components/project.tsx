/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "gatsby";



const Project = ({ project }: { project: Record<string, any> }) => {
    return <div>
        <h4 style={{ marginBottom: 5 }}>{project.frontmatter.title}</h4>
        <p style={{ marginTop: 5, marginBottom: 5 }}>{project.excerpt}</p>
        <Link style={{ marginTop: 5 }} to={`/projects/${project.frontmatter.slug}`}>Continue reading...</Link>
    </div>
}

export default Project;
