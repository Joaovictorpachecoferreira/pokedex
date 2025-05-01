const withPWA = require("next-pwa")({
  dest: "public", // Pasta onde os arquivos PWA serão gerados
  disable: process.env.NODE_ENV === "development", // Desabilita em desenvolvimento
});

module.exports = withPWA({
  reactStrictMode: true,
});
