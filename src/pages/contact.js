import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { css } from "@emotion/core";

export default function Contact({ location }) {
  return (
    <Layout>
      <SEO
        title="Social information"
        description="Chaos's social networks details"
        pathname={location.pathname}
      />
      <main
        css={css`
          text-align: center;
        `}
      >
        <p>
          <a
            href="mailto:chaos2171053@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </p>
        <p>
          <a
            href="https://github.com/chaos2171053"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </main>
    </Layout>
  );
}
