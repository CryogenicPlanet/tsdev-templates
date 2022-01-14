import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.set("port", process.env.PORT || 5000);
app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).send("Ok");
});

app.get("/", (_, res) => {
  res.status(200).send("Ok");
});

const port = app.get("port");
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


export default server;