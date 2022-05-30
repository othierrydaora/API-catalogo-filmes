import { con } from "./connection.js";

export async function adicionarFilme(filme) {
    const command = `
    INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                  values (?, ?, ?, ?, ?, ?)`
    
    const [answer] = await con.query(command, [filme.usuario, filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);

    filme.id = answer.insertID;

    return filme;
}
