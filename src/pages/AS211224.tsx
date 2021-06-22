import * as React from "react"

import Page from "../layouts/page";

import "../styles/global.css";

const AS211224 = ({ location }: { location: any}) => {
  return (
    <Page title="AS211224" location={location}>
      <h1>AS211224</h1>
      <p>AS211224 is a small IPv6-only education/research network run by Joe Banks.</p>
      <p>For more information, see the looking glass at <a href="https://lg.jb3.dev">lg.jb3.dev</a></p>
    </Page>
  )
}

export default AS211224
