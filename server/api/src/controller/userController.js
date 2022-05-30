import { logar } from '../repository/userRepo.js';
import { Router } from 'express';

const server = Router();

server.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const rtn = await logar(email, password);
        if (!rtn) throw new Error('Não autorizado');        
        res.status(200).send(rtn);
    } catch(err) {
        res.status(404).send({
            Error: err.message
        });
    }

})

export default server;
