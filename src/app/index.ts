import express from 'express';
import type { Application } from "express";

export function createServerApp(): Application {
    const app = express();
    return app;
}