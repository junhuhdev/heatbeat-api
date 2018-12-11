import { default as Medication } from "../models/Medication";
// import { injectable, inject } from "inversify";
import { provide, buildProviderModule } from "inversify-binding-decorators";
import TYPES from "../config/inversify/types";
import { Container } from "inversify";

interface IMedicationService {
    findByName(name: string): Promise<any>;
}

@provide(TYPES.MedicationService)
export class MedicationService implements IMedicationService {
    constructor() {
        const container = new Container();
        container.load(buildProviderModule());
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


