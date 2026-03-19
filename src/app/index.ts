import express from 'express';
import type { Application } from "express";

export function createServerApp(): Application {
    const app = express();

    app.get('/', function (req, res) {
        return res.json({message: 'Hello world this is Soumodip'})
    })
    app.get('/hello', function (req, res) {
        return res.json({message: 'Bye world'})
    })
    return app;
}