/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "content/**/*.md",
      path.join(__dirname, "components/**/*.vue"),
      path.join(__dirname, "layouts/**/*.vue"),
      path.join(__dirname, "pages/**/*.vue"),
      path.join(__dirname, "plugins/**/*.js"),
      "nuxt.config.js",
    ],
  },
};