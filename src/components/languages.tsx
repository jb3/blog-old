/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const COMPETENT = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Elixir",
    "Rust",
    "Golang",
    "C/C++"
]

const LEARNING = [
    "Haskell",
    "Erlang",
    "(More) C/C++"
]

const parentDivStyles = css`
display: flex;
flex-direction: rows;
`;

const childDivStyles = css`
padding-right: 70px;
`;

const ulStyles = css`
margin: 0;
padding: 0;

list-style-type: none;

li:before {
    content: "– ";
}
`;

const Languages = () => {
    return <div css={parentDivStyles}>
        <span css={childDivStyles}>
            <h3>In order of competence:</h3>
            <ul css={ulStyles}>
                {COMPETENT.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
        </span>
        <span>
            <h3>Learning:</h3>
            <ul css={ulStyles}>
                {LEARNING.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
        </span>
        <span style={{ flexGrow: 1 }}></span>
    </div >
}

export default Languages;
