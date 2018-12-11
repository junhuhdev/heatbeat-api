import { default as Medication } from "../models/Medication";
import { injectable, inject } from "inversify";

interface IMedicationService {
    findByName(name: string): Promise<any>;
}

@injectable()
class MedicationService implements IMedicationService {
    constructor() {

    }

    public findById(id: number): Promise<any> {
        return Medication.findById(id).exec();
    }

    public findByName(name: string): Promise<any> {
        return Medication.find()
            .where("name").equals(name)
            .exec();
    }
}

export { MedicationService };
