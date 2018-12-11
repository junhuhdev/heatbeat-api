import { Request, Response } from "express";
import * as medicationService from "../services/medicationservice";
import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller("/api/supplement")
export class SupplementController {

    constructor() {

    }

    @Get()
    getAll() {

    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return "hello333";
    }

    @Post("")
    post(@Body() supplement: any) {
        return "";
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() supplement: any) {
        return "";
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {

    }

}
