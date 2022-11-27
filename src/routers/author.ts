import express from "express";
import { AuthorController } from "../controllers";

const router = express.Router();

const controller = new AuthorController();

router.get("/:id", async function (req, res) {
	const id = req.params.id;
	const record = await controller.getById(id);

	res.json({ data: record });
});


router.get("/", async function (req, res) {
	const records = await controller.getMany({ limit: 10, offset: 0 });
	res.json({ data: records });
});

export default router;