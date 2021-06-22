import * as React from "react"

import Page from "../layouts/page";

import "../styles/global.css";

const IndexPage = ({ location }: { location: any}) => {
  return (
    <Page title="Home" location={location}>
      <title>Home</title>
      <h1>Joe Banks</h1>
      
      <p>Hey, I'm Joe. I'm a student studying Computer Science in the UK.</p>
      
      <p>I'm an owner at <a href="https://pythondiscord.com/">Python Discord</a>.</p>
    </Page>
  )
}

export default IndexPage
