import { Router } from 'express';
import { addGarment, getGarments } from './garments.controller.js';

const router = Router();


router
    .get("/get", getGarments)
    .post("/add", addGarment)


export default router;