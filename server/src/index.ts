import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

// not Found middleware
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
