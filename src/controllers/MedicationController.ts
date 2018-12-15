import { Request } from "express";
import {
    controller,
    httpGet,
    httpPost,
    httpDelete,
    httpPut,
    request,
    requestParam, BaseHttpController
} from "inversify-express-utils";
import { inject } from "inversify";
import { IMedicationService } from "../services";
import TYPES from "../config/inversify/Types";

@controller("/api/medication")
export class MedicationController extends BaseHttpController {

    public constructor(@inject(TYPES.MedicationService) private medicationService: IMedicationService) {
        super();
    }

    @httpGet("")
    async getAll() {
        const result = await this.medicationService.findAll();
        return this.ok(result);
    }

    @httpGet("/:id")
    async getById(@requestParam("id") id: string) {
        const result = await this.medicationService.findById(id);
        return this.ok(result);
    }

    @httpPost("")
    async create(@request() request: Request) {
        const result = await this.medicationService.create(request.body);
        return this.ok(result);
    }

    @httpPut("/:id")
    async update(@requestParam("id") id: string, @request() request: Request) {
        const result = await this.medicationService.update(id, request.body);
        return this.ok(result);
    }

    @httpDelete("/:id")
    async delete(@requestParam("id") id: string) {
        const result = await this.medicationService.delete(id);
        return this.ok(result);
    }

}


