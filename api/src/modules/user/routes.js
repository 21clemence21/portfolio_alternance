import express from "express"
const router = express.Router();

import PageController from "./controller"

router.get('/allUsers', PageController.allPages);

export default router