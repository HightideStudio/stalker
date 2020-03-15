import express from "express";
import * as bodyParser from "body-parser";
import morgan from "morgan";
import logger from "./utils/logger";

import { TrackerHTTPHandler } from "./tracking/handlers";
import { TrackerService } from "./tracking/services";
import { MemoryTrackerRepository } from "./storage/memory/tracking";

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const memoryTrackerRepo = new MemoryTrackerRepository();
const trackerService = new TrackerService(memoryTrackerRepo);
const trackerHttpHandler = new TrackerHTTPHandler(trackerService);
app.get("/trackers", (req, res) => trackerHttpHandler.get(req, res));
app.get("/trackers/:id", (req, res) => trackerHttpHandler.getById(req, res));
app.post("/trackers", (req, res) => trackerHttpHandler.create(req, res));

const port = process.env.PORT || 8000;
app.listen(port, () => {
    logger.info(`Server listening on http://localhost:${port}`);
});