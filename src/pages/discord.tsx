import * as React from "react"
import { useEffect } from "react";

import Page from "../layouts/page";

import "../styles/global.css";

const DISCORD_INVITE = "https://discord.gg/g3RsJbc5C4";

const Discord = () => {

    useEffect(() => {
        window.location.href = DISCORD_INVITE;
    });

    return (
        <Page title="Discord">
            <h1>Redirecting...</h1>
            <p>You should be redirected... if you are not please <a href={DISCORD_INVITE}>click here</a>.</p>
        </Page>
    )
}

export default Discord;
