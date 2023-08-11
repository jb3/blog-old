/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import NavBar from "../components/navbar";
import "../styles/global.css";
import logo from "../images/icon.png";

import { Helmet } from "react-helmet";

const pageStyles = css`
  font-family: "Inconsolata", sans-serif;
  padding: 96px;

  @media (max-width: 700px) {
    padding: 20px;
  }
`;

interface PageProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  let description = props.description
    ? props.description
    : "Hey, I'm Joe! I'm a student at the University of Nottingham studying Computer Science, Station Manager at NSTV and Head of Technology at URN.";
  return (
    <div css={pageStyles}>
      <NavBar />

      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        {props.title ? (
          <title>{props.title} • Joe Banks</title>
        ) : (
          <title>Joe Banks</title>
        )}
        <meta name="description" content={description} />
        <meta name="og:image" content={logo} />
        <meta name="twitter:creator" content="@JoeBanksDev" />
        <meta name="twitter:description" content={description} />
        <meta name="theme-color" content="#616283" />
      </Helmet>

      {props.children}
    </div>
  );
}
