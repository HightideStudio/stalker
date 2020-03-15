import { Tracker } from "./models";

export interface ITrackerRepository {
    create(tracker: Tracker): Error;
    findById(id: string): Tracker;
    findAll(): Tracker[];
}