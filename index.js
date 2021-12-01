import express from "express";
import path from "path";
import peopleRouter from "./people/router.js";
import starshipRouter from "./starships/router.js";
import bodyParser from "body-parser";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(peopleRouter);
app.use(starshipRouter);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(PORT);