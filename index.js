require("dotenv").config();

const server = require("./api/server.js");

const PORT = process.env.PORT || 9000;

if (PORT == null) console.error("no port set");
else
  server.listen(PORT, () => {
    console.log("server is running on ", PORT);
    console.log("env is ", process.env.NODE_ENV);
  });
