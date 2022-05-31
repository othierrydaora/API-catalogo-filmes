import { Router } from "express";
import { adicionarFilme, alterarImagem, listarTodosFilmes } from "../repository/filmeRepo.js";
import multer from 'multer'
const upload = multer ({dest:'storage/capasFilmes'})

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

server.put('/filme/:id/capa', upload.single('capa'), async (req, resp) => {
    try{
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem (imagem, id);
        if (resposta != 1) throw new Error ('A imagem não pode ser salva');
        resp.status(204).send(); 
    } catch(err) {
        resp.status(400 ).send({
            erro:err.message
        });
    }
});

server.get('/filmes', async (req, res) => {
    try {
        const rst = await listarTodosFilmes();
        res.send(rst);
    } catch(err) {
        res.status(404).send({
            Erro: err.message
        });
    }
});

export default server;
