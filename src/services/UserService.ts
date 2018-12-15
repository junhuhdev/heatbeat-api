import { provide } from "inversify-binding-decorators";
import { inject } from "inversify";
import TYPES from "../config/inversify/Types";
import { MongoDBClient } from "../database/mongodb/Client";
import { User } from "../models/User";
import { UsersCollection } from "../database/mongodb/schema/Collections";

export interface IUserService {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<User>;
    delete(id: string): Promise<any>;
}

@provide(TYPES.UserService)
export class UserService implements IUserService {
    private mongoClient: MongoDBClient;

    constructor(@inject(TYPES.MongoDBClient) mongoClient: MongoDBClient) {
        this.mongoClient = mongoClient;
    }

    public findAll(): Promise<User[]> {
        return new Promise<User[]>((resolve, reject) => {
            this.mongoClient.find(UsersCollection, {}, (error, data: User[]) => {
                resolve(data);
            });
        });
    }

    public findById(id: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.mongoClient.findOneById(UsersCollection, id, (error: any, data: any) => {
                resolve(data);
            });
        });
    }

    public create(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.mongoClient.insert(UsersCollection, user, (error, data: User) => {
                resolve(data);
            });
        });
    }

    public update(id: string, user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.mongoClient.update(UsersCollection, id, user, (error, data: User) => {
                resolve(data);
            });
        });
    }

    public delete(id: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.mongoClient.remove(UsersCollection, id, (error, data: any) => {
                resolve(data);
            });
        });
    }

}
