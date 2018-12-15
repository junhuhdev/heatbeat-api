import { provide } from "inversify-binding-decorators";
import { inject } from "inversify";
import { Medication } from "../models/Medication";
import { MedicationsCollection } from "../database/mongodb/schema/Collections";
import TYPES from "../config/inversify/Types";
import { MongoDBClient } from "../database/mongodb/Client";

export interface IMedicationService {
    findById(id: string): Promise<Medication>;
    findAllByManufacturer(manufacturer: string): Promise<Medication[]>;
    create(medication: Medication): Promise<Medication>;
    update(id: string, medication: Medication): Promise<Medication>;
    delete(id: string): Promise<any>;
}

@provide(TYPES.MedicationService)
export class MedicationService implements IMedicationService {
    private mongoClient: MongoDBClient;

    constructor(@inject(TYPES.MongoDBClient) mongoClient: MongoDBClient) {
        this.mongoClient = mongoClient;
    }

    public findAllByManufacturer(manufacturer: string): Promise<Medication[]> {
        return new Promise<Medication[]>((resolve, reject) => {
            this.mongoClient.find(MedicationsCollection, {manufacturer: manufacturer}, (error, data: Medication[]) => {
                resolve(data);
            });
        });
    }

    public findById(id: string): Promise<Medication> {
        return new Promise<Medication>((resolve, reject) => {
            this.mongoClient.findOneById(MedicationsCollection, id, (error: any, data: any) => {
                resolve(data);
            });
        });
    }

    public create(medication: Medication): Promise<Medication> {
        return new Promise<Medication>((resolve, reject) => {
            this.mongoClient.insert(MedicationsCollection, medication, (error, data: Medication) => {
                resolve(data);
            });
        });
    }

    public update(id: string, medication: Medication): Promise<Medication> {
        return new Promise<Medication>((resolve, reject) => {
            this.mongoClient.update(MedicationsCollection, id, medication, (error, data: Medication) => {
                this.mongoClient.update(MedicationsCollection, id, medication, (error, data: Medication) => {
                    resolve(data);
                });
            });
        });
    }

    public delete(id: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.mongoClient.remove(MedicationsCollection, id, (error, data: any) => {
                resolve(data);
            });
        });
    }

}


