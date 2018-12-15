import { Db, MongoClient } from "mongodb";
import { MONGODB_URI, MONGODB_NAME } from "../../util/secrets";

export class MongoDBConnection {
    private static isConnected: boolean = false;
    private static db: Db;

    public static getConnection(result: (connection: any) => void) {
        if (this.isConnected) {
            return result(this.db);
        } else {
            this.connect((error, db: Db) => {
                return result(this.db);
            });
        }
    }

    private static connect(result: (error: any, db: Db) => void) {
        MongoClient.connect(MONGODB_URI, (err, client) => {
            this.db = client.db(MONGODB_NAME);
            this.isConnected = true;
            return result(err, this.db);
        });
    }
}
