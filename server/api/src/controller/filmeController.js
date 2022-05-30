import { Router } from "express";
import { adicionarFilme } from "../repository/filmeRepo.js";

const server = Router();

server.post('/filme', async (req, res) => {
    try {
        const novoFilme = req.body;
        
        if (!novoFilme.nome) throw new Error('Nome do filme ée obrigatório');
        if (!novoFilme.sinopse) throw new Error('Sinopse do filme é obrigatória');
        if (novoFilme.avaliacao == undefined || novoFilme.avaliacao < 0) throw new Error('Avaliação inválida');
        if (!novoFilme.lancamento) throw new Error('O lançamento é obrigatório');
        if (novoFilme.disponivel == undefined) throw new Error('A disponibilidade é obigatória');
        
        const filme = await adicionarFilme(novoFilme);
        res.send(filme);
    } catch (err) {
        res.status(400).send({
            Error: err.message
        });
    }
});

export default server;