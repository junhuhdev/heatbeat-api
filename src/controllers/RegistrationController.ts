import { Request, Response } from "express";
import * as medicationService from "../services/medicationservice";
import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller("/api/registration")
export class RegistrationController {

    constructor() {

    }


    @Post("")
    post(@Body() medication: any) {
        return "";
    }


}


