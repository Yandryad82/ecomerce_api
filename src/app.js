const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");
const errorHandlerRouter = require("./routes/errorHandler.routes");

initModels();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 8000;

db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

  db.sync({ force:true }) 
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

  app.use(userRoutes);
  app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("welcome to my API");
});

errorHandlerRouter(app);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});