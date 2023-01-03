import config from "./config";
import express from "express";

async function startServer() {
  const app = express();

  require("./loaders")
    .default({ expressApp: app })
    .then(() => {
      app
        .listen(config.port, () => {
          console.log(`Server running on port ${config.port}`);
        })
        .on("error", () => {
          console.log(`Server failed to start on port ${config.port}`);
          process.exit(1);
        });
    })
    .catch(() => process.exit(1));
}

startServer();
