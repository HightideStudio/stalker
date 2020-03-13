import { Request, Response, Router } from "express";
import { TrackerService } from "./services";

interface ITrackerHTTPHandler {
    get(req: Request, res: Response): void
    getById(req: Request, res: Response): void
    create(req: Request, res: Response): void
}

class TrackerHTTPHandler implements ITrackerHTTPHandler {
    trackerService: TrackerService;

    constructor(tackerService: TrackerService) {
        this.trackerService = this.trackerService;
    }

    get(req: Request, res: Response): void {
        let trackers = this.trackerService.findAllTrackers();
        res.status(200).send({trackers});
    }

    getById(req: Request, res: Response): void {
        let tracker = this.trackerService.findTrackerById(req.params.id);
        res.status(200).send(tracker);
    }

    create(req: Request, res: Response): void {
        this.trackerService.createTracker(req.body)
            .then((id: string) => {
                res.status(201).send({id});
            })
            .catch((err: Error) => {
                res.status(400).send(err);
            });
    }
}