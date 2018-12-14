import { default as Medication } from "../models/Medication";
// import { injectable, inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import TYPES from "../config/inversify/types";

export interface IMedicationService {
    findByName(name: string): Promise<any>;

    findById(id: number): Promise<any>;
}

@provide(TYPES.MedicationService)
export class MedicationService implements IMedicationService {
    constructor() {
    }

    public findById(id: number): Promise<any> {
        const temp = "asd";
        return Medication.findById(id).exec();
    }

    public findByName(name: string): Promise<any> {
        return Medication.find()
            .where("name").equals(name)
            .exec();
    }

}


