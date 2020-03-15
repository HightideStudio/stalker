import logger from "../utils/logger";
import { Request, Response, Router } from "express";
import { TrackerService } from "./services";
import { Tracker } from "./models";

interface ITrackerHTTPHandler {
    get(req: Request, res: Response): void
    getById(req: Request, res: Response): void
    create(req: Request, res: Response): void
}

export class TrackerHTTPHandler implements ITrackerHTTPHandler {
    trackerService: TrackerService;

    constructor(trackerService: TrackerService) {
        this.trackerService = trackerService;
    }

    get(req: Request, res: Response): void {
        const trackers = this.trackerService.findAllTrackers();
        res.status(200).send({trackers});
    }

    getById(req: Request, res: Response): void {
        const tracker = this.trackerService.findTrackerById(req.params.id);
        res.status(200).send(tracker);
    }

    create(req: Request, res: Response): void {
        this.trackerService.createTracker(req.body)
            .then((tracker: Tracker) => {
                res.status(201).send(tracker);
            })
            .catch((err: Error) => {
                res.status(400).send({message: err.message});
            });
    }
}