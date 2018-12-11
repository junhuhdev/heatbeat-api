import { Request, Response } from "express";
import * as medicationService from "../services/medicationservice";
import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller("/api/medication")
export class MedicationController {

    constructor() {

    }

    @Get()
    getAll(): any[] {
        return [];
    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return "hell22o";
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


