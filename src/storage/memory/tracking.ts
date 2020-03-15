import { ITrackerRepository } from "../../tracking/repo";
import { Tracker } from "../../tracking/models";
import logger from "../../utils/logger";

export class MemoryTrackerRepository implements ITrackerRepository {
    private memory: {[id: string]: Tracker} = {};

    create(tracker: Tracker): Error {
        if (!tracker.id)
            return new Error("No ID");
        if (this.memory[tracker.id])
            return new Error("Tracker already exists with id.");
        this.memory[tracker.id] = Object.assign({}, tracker);
        return undefined;
    }

    findById(id: string): Tracker {
        if (this.memory[id])
            return Object.assign({}, this.memory[id]);
        return undefined;
    }

    findAll(): Tracker[] {
        return Object.keys(this.memory).map(id => {
            return Object.assign(this.memory[id], {});
        });
    }
}