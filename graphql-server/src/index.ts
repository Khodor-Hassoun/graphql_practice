import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
require("dotenv").config();
const port = Number(process.env.API_PORT);

const yoga = createYoga({});
const server = createServer(yoga);
server.listen(port, () => {
  console.info(`Server is running on http://localhost:4000/graphql ${port}`);
});
