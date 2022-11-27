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
	const records = await controller.getMany({ limit: 10, offset: 0 })
	res.json({ data: records })
});

router.post("/", async function (req: Request, res: Response) {
	const record = await controller.addOne(req.body)
	res.json({ data: record })
});

export default router;