import { BaseModel } from "../../common/models";
import { TimeSlot } from "./timeSlot";

export class Tracker extends BaseModel {
    id: string;
    title: string;
    description: string;
    timeSlots: TimeSlot[];
    // labels: Array<Label>;

    constructor(title: string, description: string/*, labels: Array<Label>*/) {
        super();
        this.title = title;
        this.description = description;
        // this.labels = labels;
    }
}