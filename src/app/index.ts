import express from 'express';
import type { Application } from "express";
import todoRouter from "./todo/routes.js";

export function createServerApp(): Application {
    const app = express();

    // //#region //*========== Routes ================
    // app.get('/', function (req, res) {
    //     return res.json({message: 'Hello world this is Soumodip'})
    // })
    // app.get('/hello', function (req, res) {
    //     return res.json({message: 'Bye world'})
    // })
    // //#endregion //*========== Routes ================

    app.use('/todos', todoRouter)
    
    
    return app;
}