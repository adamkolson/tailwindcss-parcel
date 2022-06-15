/* This will compress your markup and remove unnecessary `tailwindcss` classes from the CSS */
prettier.config.jsmodule.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
};
