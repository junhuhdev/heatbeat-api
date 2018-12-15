import { default as Medication } from "../models/Medication";
// import { injectable, inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import TYPES from "../config/inversify/types";
import { MongoDBClient } from "../database/mongodb/client";
import { inject } from "inversify";

export interface IMedicationService {
    findByName(name: string): Promise<any>;

    findById(id: string): Promise<any>;
}

@provide(TYPES.MedicationService)
export class MedicationService implements IMedicationService {
    private mongoClient: MongoDBClient;

    constructor(@inject(TYPES.MongoDBClient) mongoClient: MongoDBClient) {
        this.mongoClient = mongoClient;
    }

    public findById(id: string): Promise<Medication> {
        // const temp = "asd";
        // return Medication.findById(id).exec();

        return new Promise<Medication>((resolve, reject) => {
            this.mongoClient.f
        });

    }

    public findByName(name: string): Promise<any> {
        return Medication.find()
            .where("name").equals(name)
            .exec();
    }

}


