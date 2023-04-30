import express from "express";
import cors from "cors";
import db from "./app/config/config.js";
import routes from "./app/src/routes/routes.js";

const PORT = 1234;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log(`Server attivo su porta ${PORT}`));

try {
  await db.authenticate();
  console.log("La connessione al database è stata stabilita con successo");
} catch (error) {
  console.error("Impossibile connettersi al database: ", error);
}

db.sync();
//db.sync({ alter: true });