import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { css } from "@emotion/core";

export default function Contact({ location }) {
  return (
    <Layout>
      <SEO
        title="Social information"
<<<<<<< HEAD
        description="Arnaud Valensi's social networks details"
=======
        description="Chaos's social networks details"
>>>>>>> develop
        pathname={location.pathname}
      />
      <main
        css={css`
          text-align: center;
        `}
      >
        <p>
          <a
<<<<<<< HEAD
            href="mailto:arnaud.valensi@gmail.com"
=======
            href="mailto:chaos2171053@gmail.com"
>>>>>>> develop
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </p>
        <p>
          <a
<<<<<<< HEAD
            href="https://github.com/ArnaudValensi"
=======
            href="https://github.com/chaos2171053"
>>>>>>> develop
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
<<<<<<< HEAD
      <p>
        <a
          href="https://www.linkedin.com/in/arnaud-valensi-04080084/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
          </a>
      </p>
      <p>
        <a
          href="https://twitter.com/ArnaudValensi"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
          </a>
      </p>
      </main>
    </Layout >
  )
=======
      </main>
    </Layout>
  );
>>>>>>> develop
}
