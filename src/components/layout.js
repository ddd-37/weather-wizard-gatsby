import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import LinkOffSite from "./UI/LinkOffSite";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <LinkOffSite url="https://devon-deason.netlify.app/">
              Devon Deason
            </LinkOffSite>
          </p>

          <p className="text-white">
            <LinkOffSite url="https://github.com/ddd-37">Github</LinkOffSite>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
