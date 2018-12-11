import { Request, Response } from "express";
import * as medicationService from "MedicationService.ts";
import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller("/api/daily")
export class DailyController {

    constructor() {

    }

    @Get()
    getAll(): any[] {
        return [];
    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return "22";
    }

    @Post("")
    post(@Body() daily: any) {
        return "";
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() daily: any) {
        return "";
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {

    }


}


