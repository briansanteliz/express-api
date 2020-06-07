const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const router = require("./routes/movies");
const photos = require("./routes/photos");

//settings
const app = express();
app.set("port", process.env.PORT || 8080);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//initial the server
const init = async () => {
  await app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
};
init();

//routes
app.use(routes);
app.use("/api/movies", router);
app.use("/api/photos", photos);
