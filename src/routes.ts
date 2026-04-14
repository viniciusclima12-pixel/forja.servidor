import { Router } from "express";  

import alunosController from "./controllers/alunos";

const router = Router();

router.get("/", (request, response) => response.status(200).json("Servidor rodando"),);

//rotas de alunos

router.post("/alunos", alunosController.create);
router.get("/alunos", alunosController.list);
router.get("/alunos/:id", alunosController.getById);
router.put("/alunos/:id", alunosController.update);
router.delete("/alunos/:id", alunosController.delete);


export default router;
