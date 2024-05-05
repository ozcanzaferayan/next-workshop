import type { Config } from "drizzle-kit";
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

//dotenv.config();

const connectionString = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`;

console.log(connectionString);

export default {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: connectionString,
  },
} satisfies Config;
