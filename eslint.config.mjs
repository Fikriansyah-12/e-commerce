import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ["public/js/*.js"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "vue/no-dupe-keys": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "no-console": ["warn", { allow: ["warn", "error", "table", "clear"] }]
  }
})
