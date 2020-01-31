import express from "express"
const router = express.Router();

import PageController from "./controller"

router.get('/all', PageController.getAll);
router.get('/:id', PageController.getById);

export default router