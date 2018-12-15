import { Request, Response } from "express";
import * as express from "express";
import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    httpDelete,
    httpPut,
    request,
    queryParam,
    response,
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
    getAll(): any[] {
        return [];
    }

    @httpGet("/:id")
    async get(@requestParam("id") id: string) {
        const result = await this.medicationService.findById(id);
        return this.ok(result);
    }

    @httpPost("")
    post(@request() req: Request) {
        return "";
    }

    @httpPut("/:id")
    put(@requestParam("id") id: number, @request() req: Request) {
        return "";
    }

    @httpDelete("/:id")
    delete(@requestParam("id") id: number) {

    }

}


