import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>Ruh roh, this page doe not exist</div>
    </Layout>
  );
}

export default NotFoundPage;
