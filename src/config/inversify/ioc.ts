import "reflect-metadata";
import { Container, inject } from "inversify";
import { autoProvide, buildProviderModule } from "inversify-binding-decorators";
import TYPES from "./types";
import { IMedicationService, MedicationService } from "../../services";

const container = new Container();

container.bind<IMedicationService>(TYPES.MedicationService).to(MedicationService);

export { container, autoProvide, inject };
