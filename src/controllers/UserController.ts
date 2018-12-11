import { Request, Response } from "express";
import * as medicationService from "MedicationService.ts";
import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller("/api/user")
export class UserController {

    constructor() {

    }

    @Get()
    getAll(): any[] {
        return [];
    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return "hello";
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


