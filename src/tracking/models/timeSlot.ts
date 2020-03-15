import { BaseModel } from "../../common/models";

export class TimeSlot extends BaseModel {
    id: number;
    startTime: Date;
    endTime: Date;
}