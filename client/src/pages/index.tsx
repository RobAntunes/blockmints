import React, { useEffect, useRef } from "react";

import Layout from "../components/layout";
// import Seo from "../components/seo";

import * as styles from "../styles/index.module.css";
import Hero from "../containers/hero";

const IndexPage = () => {
  return (
    <Layout>
     <Hero />
    </Layout>
  );
};

export default IndexPage;
