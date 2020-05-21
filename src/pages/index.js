import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="flex flex-grow flex-col md:flex-row">
        <section className="bg-blue-500 md:w-1/5">Sidebar</section>
        <section className="bg-yellow-500 flex-1 md:w-4/5">Content</section>
      </div>
    </Layout>
  );
}

export default IndexPage;
