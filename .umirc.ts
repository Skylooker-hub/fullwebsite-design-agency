export default {
  npmClient: "pnpm",
  base: "/fullwebsite-design-agency/",
  publicPath: "/fullwebsite-design-agency/",
  plugins: [require.resolve("@umijs/plugins/dist/tailwindcss")],
  alias: {
    "@": "./src",
  },
  tailwindcss: {},
  title: "欣欣科技-创新型网络科技公司",
  targets: {
    ie: 11,
  },
};
