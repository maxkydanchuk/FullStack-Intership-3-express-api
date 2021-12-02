import express from "express";
import path from "path";
import peopleRouter from "./libs/people/router.js";
import starshipRouter from "./libs/starships/index.js";
import bodyParser from "body-parser";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(bodyParser.json());
app.use(peopleRouter);
app.use(starshipRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(PORT);