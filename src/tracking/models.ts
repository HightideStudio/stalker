import { BaseModel } from "../common/models";

export class Tracker extends BaseModel {
    id: string;
    title: string;
    description: string;
    timeSlots: Array<TimeSlot>;
    // labels: Array<Label>;

    constructor(title: string, description: string/*, labels: Array<Label>*/) {
        super();
        this.title = title;
        this.description = description;
        // this.labels = labels;
    }
}

export class TimeSlot extends BaseModel {
    id: number;
    startTime: Date;
    endTime: Date;
}

export class Label extends BaseModel {
    id: number;
    name: string;
    color: string;

    constructor(name: string, color: string) {
        super();
        this.name = name;
        this.color = color;
    }
}