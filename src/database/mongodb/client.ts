import { Db, ObjectID } from "mongodb";
import { injectable } from "inversify";
import { MongoDBConnection } from "./connection";


export class MongoDBClient {
    public db: Db;

    constructor() {
        MongoDBConnection.getConnection((connection) => {
            this.db = connection;
        });
    }

    public find(collection: string, filter: Object, result: (error: any, data: any) => void): void {
        this.db.collection(collection).find(filter).toArray((error, find) => {
            return result(error, find);
        });
    }
}
