import { Router } from "express";  

import alunosController from "./controllers/alunos";
import cursosController from "./controllers/cursos";

const router = Router();

router.get("/", (request, response) => response.status(200).json("Servidor rodando"),);

//rotas de alunos

router.post("/alunos", alunosController.create);
router.get("/alunos", alunosController.list);
router.get("/alunos/:id", alunosController.getById);
router.put("/alunos/:id", alunosController.update);
router.delete("/alunos/:id", alunosController.delete);

router.post("/cursos", cursosController.create);
router.get("/cursos", cursosController.list);
router.get("/cursos/:id", cursosController.getById);
router.put("/cursos/:id", cursosController.update);
router.delete("/cursos/:id", cursosController.delete);


export default router;
  