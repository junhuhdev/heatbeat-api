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
import { MedicationService } from "../services";
import TYPES from "../config/inversify/types";

@controller("/api/medication")
export class MedicationController extends BaseHttpController {

    // private medicationService: MedicationService;

    public constructor(@inject(TYPES.MedicationService) private medicationService: MedicationService) {
        super();
    }

    @httpGet("")
    getAll(): any[] {
        return [];
    }

    @httpGet("/:id")
    async get(@requestParam("id") id: number) {
        const result = await this.medicationService.findById(id);
        return result;
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


