export const katexOptions = {
  macros: {
    // Your custom macros, adapted for KaTeX (it uses similar syntax)
    "\\negl": "\\mathsf{negl}",
    "\\poly": "\\mathsf{poly}",
    "\\PPT": "\\mathsf{PPT}",
    "\\Adv": "\\mathsf{Adv}",
    "\\PRF": "\\mathsf{PRF}",
    "\\Func": "\\mathsf{Func}",
    // Add more as needed; KaTeX supports most AMS math commands out of the box
  },
};

// export const katexOptions = {
//   config: {
//     // This nesting is required for KaTeX options
//     tex: {
//       inlineMath: [["$", "$"]],
//       displayMath: [
//         ["$$", "$$"],
//         ["\\[", "\\]"],
//       ], // Supports your existing $$ delimiters for display math
//       macros: {
//         // Add any custom macros from your content here
//         negl: "\\mathsf{negl}",
//         poly: "\\mathsf{poly}",
//         PPT: "\\mathsf{PPT}",
//         Adv: "\\mathsf{Adv}",
//         PRF: "\\mathsf{PRF}",
//         Func: "\\mathsf{Func}",
//         // Add more as needed, e.g., for other commands in your Markdown
//       },
//     },
//   },
// };
