import * as React from "react"
import NavBar from "../components/navbar"

import { Helmet } from "react-helmet";

const pageStyles = {
    "fontFamily": "Roboto, sans-serif",
    "margin": "30px 25% 0 25%"
}

export default function Page(props: Record<string, any>) {
    return (<div style={pageStyles}>
        <NavBar location={props.location}/>

        <Helmet>
            {props.title ? <title>{props.title} • Joe Banks</title> : <title>Joe Banks</title>}
        </Helmet>

        {props.children}
    </div>);
}
