import nextra from "nextra";
import { katexOptions } from "./katex-config.mjs";

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
  latex: {
    renderer: "katex",
    options: katexOptions,
  },
});

export default withNextra({
  // ... Other Next.js config options
  // output: 'export'
});
