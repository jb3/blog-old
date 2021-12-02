import * as React from "react"

import Page from "../layouts/page";

import "../styles/global.css";

const AS211224 = () => {
  return (
    <Page title="AS211224" description="AS211224 is a small IPv6-only education/research network run by Joe Banks.">
      <h1>AS211224</h1>
      <p>AS211224 is a small IPv6-only education/research network run by Joe Banks.</p>
      <p>For more information, see the looking glass at <a href="https://lg.jb3.dev">lg.jb3.dev</a></p>
      <h3>Peering Policy</h3>
      <p>In it's current form, AS211224 does not have many mutual peering points with other networks. You can find mutual points on PeeringDB <a href="https://www.peeringdb.com/net/27107">here</a>, as of now this is solely EVIX (routes <b>are</b> published to the EVIX route server). Please contact <a href="mailto:joe@jb3.dev">joe@jb3.dev</a> for peering questions, or find other contact points on PeeringDB.</p>
    </Page>
  )
}

export default AS211224;
