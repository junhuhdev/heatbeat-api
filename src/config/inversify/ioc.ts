import "reflect-metadata";
import { Container, inject } from "inversify";
import { autoProvide, buildProviderModule } from "inversify-binding-decorators";
import TYPES from "./Types";
import { IMedicationService, MedicationService } from "../../services";
import { IUserService, UserService } from "../../services/UserService";
import { MongoDBClient } from "../../database/mongodb/Client";

const container = new Container();

container.bind<IMedicationService>(TYPES.MedicationService).to(MedicationService);
container.bind<IUserService>(TYPES.UserService).to(UserService);
container.bind<MongoDBClient>(TYPES.MongoDBClient).to(MongoDBClient);

export { container, autoProvide, inject };
