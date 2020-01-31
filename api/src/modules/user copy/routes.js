import express from "express"
const router = express.Router();

import PageController from "./controller"

router.get('/allPages', PageController.allPages);

export default router