import { v1 as uuidv1 } from "uuid";
import logger from "../utils/logger";
import { Tracker, TimeSlot, Label } from "./models";
import { ITrackerRepository } from "./repo";

export interface ITrackerService {
    createTracker(body: {title: string, description: string}): Promise<Tracker>;
    findTrackerById(id: string): Tracker;
    findAllTrackers(): Tracker[];
}

export class TrackerService implements ITrackerService {
    repo: ITrackerRepository;

    constructor(repo: ITrackerRepository) {
        this.repo = repo;
    }

    createTracker(body: {title: string, description: string}): Promise<Tracker> {
        const promise = new Promise<Tracker>((resolve, reject) => {
            const tracker = new Tracker(body.title, body.description)
            tracker.id = uuidv1();
            tracker.createdAt = new Date();
            tracker.updatedAt = new Date();
            const error = this.repo.create(tracker);
            if (error) {
                reject(error);
            } else {
                resolve(tracker);
            }
        });
        return promise;
    }

    findTrackerById(id: string): Tracker {
        return this.repo.findById(id);
    }

    findAllTrackers(): Tracker[] {
        return this.repo.findAll();
    }
}