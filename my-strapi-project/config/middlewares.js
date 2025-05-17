module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "https://c-s-c.vercel.app", // Production
        "https://c-s-p2alm0kys-julievoghs-projects.vercel.app", // Preview
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      headers: "*",
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
