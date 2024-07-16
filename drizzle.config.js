/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "sqlite",
  schema: "./schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: './test.db',
  }
};
