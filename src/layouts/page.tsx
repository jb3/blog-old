/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import NavBar from "../components/navbar"
import "../styles/global.css";

import { Helmet } from "react-helmet";

const pageStyles = css`
font-family: "Roboto", sans-serif;
padding: 96px;

@media (max-width: 700px) {
    padding: 20px;
}
`;

export default function Page(props: Record<string, any>) {
    return (<div css={pageStyles}>
        <NavBar />

        <Helmet>
            {props.title ? <title>{props.title} • Joe Banks</title> : <title>Joe Banks</title>}
        </Helmet>

        {props.children}
    </div>);
}
