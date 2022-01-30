import React, { useEffect, useRef } from "react";

import Layout from "../components/layout";
// import Seo from "../components/seo";

import LiveAuctions from "../components/liveAuctions";
import { HeaderTwo } from "../components/headings";

import * as styles from "../styles/index.module.css";
import Hero from "../containers/hero";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <section className={styles.live_auctions}>
        <HeaderTwo className="section__heading" content="Live Auctions" />
        <LiveAuctions />
      </section>
    </Layout>
  );
};

export default IndexPage;
