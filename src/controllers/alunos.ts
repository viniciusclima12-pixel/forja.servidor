import { Request, Response } from 'express';

import{ prisma } from '../../config/prisma';
import { handleErrors } from "../helpers/handleErrors";

export default ({
    create: async (request: Request, response: Response) => { 
        try{

        
        const {nome, idade, cpf, genero, email} = request.body;

        if(!nome || !idade || !cpf || !email) {
            return response.status(400).json({ error: 'Dados incompletos' });
        }

        const aluno = await prisma.alunos.create({
            data: { nome, idade, cpf, genero, email }
        });

        return response.status(201).json(aluno);
    } catch (e) {
        return handleErrors(e, response);
      }
    },
    list: async (request: Request, response: Response) => { },
    getById: async (request: Request, response: Response) => { },
    update: async (request: Request, response: Response) => { },
    delete: async (request: Request, response: Response) => { },

})