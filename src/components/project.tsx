/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "gatsby";
import { useEffect, useState } from "react";

const COLORS = [
    "#C23B23",
    "#F39A27",
    "#03C03C",
    "#579ABE",
    "#976ED7"
]

const divStyles = (color: string) => css`
color: #000;
padding: 10px;
padding-right: 20px;
padding-left: 20px;
height: 100%;
border-width: 2px;
border-radius: 15px;
border-color: #ebebeb;
border-style: solid;
transition: all 0.3s ease;
&:hover {
    border-color: ${color};
    color: ${color};
}
`;

const flexStyles = css`
padding: 20px;
width: 40%;
@media (max-width: 700px) {
    width: 80%;
}
`

const boxStyles = css`
height: 100%;
text-decoration: none;
`;

function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}


const Project = ({ project }: { project: Record<string, any> }) => {
    const [color, setColor] = useState(randomColor());

    useEffect(() => {
        setColor(randomColor());
    });

    return <div css={flexStyles}>
        <Link to={`/projects/${project.frontmatter.slug}`} css={boxStyles} onMouseLeave={() => setColor(randomColor())}>
            <div css={divStyles(color)}>
                <h4 style={{ marginBottom: 5 }}>{project.frontmatter.title}</h4>
                <p style={{ marginTop: 5, marginBottom: 5 }}>{project.excerpt}</p>
            </div>
        </Link>
    </div >;
}

export default Project;
