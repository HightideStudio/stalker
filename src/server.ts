import express from "express";
import logger from "./utils/logger";

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world!');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    logger.info(`Server listening on http://localhost:${port}`);
});