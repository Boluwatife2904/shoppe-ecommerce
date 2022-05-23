/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["plugin:vue/vue3-essential", "@vue/eslint-config-typescript/recommended", "plugin:prettier/recommended"],
    env: {
        "vue/setup-compiler-macros": true,
    },
};
