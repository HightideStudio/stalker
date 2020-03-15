import { BaseModel } from "../../common/models";

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