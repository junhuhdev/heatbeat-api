import { Request, Response } from "express";
import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { injectable, inject } from "inversify";
import { MedicationService } from "../services/MedicationService";
import { TYPES } from "../config/inversify/types";

@Controller("/api/medication")
export class MedicationController {

    constructor(@inject(TYPES.MedicationService) private medicationService: MedicationService) {

    }

    @Get()
    getAll(): any[] {
        return [];
    }

    @Get("/:id")
    async get(@Param("id") id: number) {
        const result = await this.medicationService.findById(id);
        return result;
    }

    @Post("")
    post(@Body() medication: any) {
        return "";
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() medication: any) {
        return "";
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {

    }


}


