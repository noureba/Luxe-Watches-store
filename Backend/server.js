import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("servers is runing");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});
