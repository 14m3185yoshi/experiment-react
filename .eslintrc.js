module.exports = {
  // NOTE: グローバルな変数を環境に応じて定義してくれるもの。
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  // NOTE: 自動的にrulesにルールが追加されている。(rulesで上書きも可能。)
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],

  parserOptions: {
    // NOTE: ES2015やJSX等の最新の構文を使えるようにするために。
    ecmaFeatures: {
      jsx: true,
    },
    // NOTE: ECMAScriptのバージョンを指定。(正しい書き方は2021)
    ecmaVersion: 2021,
    sourceType: "module",
  },

  //NOTE: 外部のパッケージのルールを追加したい時に。(例えばrulesにreact/prop-typesなどのeslintにないものを設定できる)
  plugins: ["react"],

  // NOTE: エラーの種類は3種類(error(0), warn(1), off(2))
  rules: {
    // "semi": ["error", "always"],
    // "quotes": ["error", "double"], // NOTE: doubleがデフォルトなので、 「"quotes": "error"」でもOK
    // "react/prop-types": off,
  },

  // NOTE: package.jsonに記載されているversionを見て、エラーを出すかなどを判断してくれる。
  settings: {
    react: {
      version: "detect",
    },
  },
};
