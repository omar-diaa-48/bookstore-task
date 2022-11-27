import express, { Request, Response } from "express";
import { StoreController } from "../controllers";

const router = express.Router();

const controller = new StoreController();

router.get("/:id", async function (req, res) {
	const id = req.params.id;
	const record = await controller.getById(id);

	res.json({ data: record });
});

router.get("/", async function (req: Request, res: Response) {
	const records = await controller.getMany({ limit: 10, skip: 0 })
	res.json({ data: records })
});

export default router;