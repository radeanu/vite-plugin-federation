module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
  ],
  rules: {
    "no-debugger": "off",
    "vue/prop-name-casing": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-multiple-template-root": "warn",
    "no-console":
      process.env.NODE_ENV !== "development"
        ? ["warn", { allow: ["error"] }]
        : "off",
    "no-unused-vars": "warn",
    "vue/component-name-in-template-casing": "warn",
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: 3,
        multiline: 1,
      },
    ],
    // 'vue/first-attribute-linebreak': [
    //     'warn',
    //     {
    //         singleline: 'ignore',
    //         multiline: 'below'
    //     }
    // ],
    "vue/script-indent": [
      "warn",
      4,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: [],
      },
    ],
    "vue/html-indent": [
      "warn",
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "vue/multi-word-component-names": "warn",
    "vue/no-reserved-component-names": "warn",
    "vue/no-v-for-template-key": "warn",
  },
};
