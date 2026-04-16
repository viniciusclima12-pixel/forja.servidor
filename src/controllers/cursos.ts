import { Request, Response } from 'express';

import { prisma } from '../../config/prisma';
import { handleErrors } from "../helpers/handleErrors";

export default ({
    create: async (request: Request, response: Response) => {
        try {


            const { nome, descricao, duracao } = request.body;

            if (!nome || !descricao || !duracao) {
                return response.status(400).json({ error: 'Dados incompletos' });
            }

            const cursos = await prisma.cursos.create({
                data: { nome, descricao, duracao }
            });

            return response.status(201).json(cursos);
        } catch (e) {
            return handleErrors(e, response);
        }
    },

    list: async (request: Request, response: Response) => {
        try {
            const cursos = await prisma.cursos.findMany();
            return response.status(200).json(cursos);
        } catch (e) {
            return handleErrors(e, response);
        }
    },

    getById: async (request: Request, response: Response) => {
        try {
            const { id } = request.params;

            const cursos = await prisma.cursos.findUnique({
                where: {
                    id: Number(id)
                },
            });
            if (!cursos) {
                return response.status(404).json({ error: 'cursos não encontrado' });
            }

            return response.status(200).json(cursos);
        } catch (e) {
            return handleErrors(e, response);
        }
    },
    update: async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            const {nome, descricao, duracao, } = request.body;

            const cursos = await prisma.cursos.update({
                where: {
                    id: Number(id)
                },
                data: {
                    nome,
                    descricao,
                    duracao,
                },
            });
            return response.status(200).json(cursos);
        } catch (e) {
            return handleErrors(e, response);
        }
    },
    delete: async (request: Request, response: Response) => { 
        try {
            const { id } = request.params;

            const cursos = await prisma.cursos.delete({
                where: {
                    id: Number(id)
                },
            });
            return response.status(200).json(cursos);

        }catch (e) {
            return handleErrors(e, response);
        }
    },

})