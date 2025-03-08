import React from "react";

const config = {
    search: true,
    head: (
        <>
            <link rel="icon" type="image/png" href="/images/general/logo.png" />
        </>
    ),
    logo: (
        <>
      <span className="nx-flex nx-items-center nx-gap-2">
        <img src="/images/general/logo.png" style={{ width: "45px" }} alt="Logo" />
        <b>Viivue Docs</b>
      </span>
        </>
    ),
    project: {
        link: "https://github.com/viivue/docs-v2",
    },
    docsRepositoryBase: "https://github.com/viivue/docs-v2",
    footer: {
        text: "Viivue Documents",
    },
};

export default config;
