import "reflect-metadata";
import { Container, inject } from "inversify";
import { autoProvide, buildProviderModule } from "inversify-binding-decorators";
import { MedicationService } from "../../services";
import TYPES from "./types";

const container = new Container();

container.bind<MedicationService>(TYPES.MedicationService).to(MedicationService);

export { container, autoProvide, inject };
