module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    // Fallback ensures Strapi never crashes if APP_KEYS is missing
    keys: env.array("APP_KEYS", ["defaultKeyA", "defaultKeyB"]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
