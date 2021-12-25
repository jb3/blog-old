import * as React from "react"

import Page from "../layouts/page";

import "../styles/global.css";

const Privacy = () => {
  return (
    <Page title="Privacy" description="Privacy on jb3.dev services.">
      <h1>Privacy</h1>
      <p>All services powered by jb3.dev infrastructure adopt <a href="https://en.wikipedia.org/wiki/KISS_principle">KISS principles</a> when it comes to privacy.</p>
      <ul>
        <li>External tracking is not performed, no client-side analytics tools are installed on any jb3.dev page</li>
        <li>Some data is retained for performance analysis and server-side analytics, this data includes IP addresses and HTTP Referers. It is not stored permanently.</li>
        <li>Stored personal information is kept to an absolute minimum, any stored data is strictly necessary.</li>
      </ul>
      <p>Any questions regarding privacy on jb3.dev services can be directed to <a href="mailto:privacy@jb3.dev">privacy@jb3.dev</a>.</p>
    </Page>
  )
}

export default Privacy;
