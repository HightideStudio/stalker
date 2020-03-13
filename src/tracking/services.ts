import { v1 as uuidv1 } from "uuid";
import { Tracker, TimeSlot, Label } from "./models";
import { ITrackerRepository } from "./repo";

export interface ITrackerService {
    createTracker(body: {title: string, description: string}): Promise<string>;
    findTrackerById(id: string): Tracker;
    findAllTrackers(): Array<Tracker>;
}

export class TrackerService implements ITrackerService {
    repo: ITrackerRepository;

    constructor(repo: ITrackerRepository) {
        this.repo = repo;
    }

    createTracker(body: {title: string, description: string}): Promise<string> {
        let promise = new Promise<string>((resolve, reject) => {
            let tracker = new Tracker(body.title, body.description)
            tracker.id = uuidv1();
            tracker.createdAt = new Date();
            tracker.updatedAt = new Date();
            let error = this.repo.create(tracker);
            if (error) {
                reject(error);
            } else {
                resolve(tracker.id);
            }
        });
        return promise;
    }

    findTrackerById(id: string): Tracker {
        return this.repo.findById(id);
    }

    findAllTrackers(): Array<Tracker> {
        return this.repo.findAll();
    }
}