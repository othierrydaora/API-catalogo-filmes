import { con } from "./connection.js";

export async function adicionarFilme(filme) {
    const command = `
    INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                  values (?, ?, ?, ?, ?, ?)`
    
    const [answer] = await con.query(command, [filme.usuario, filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);

    filme.id = answer.insertID;

    return filme;
}

export async function alterarImagem(imagem, id) {
    const comando =
    `UPDATE tb_filme 
    SET img_filme       =?
    WHERE id_filme      =?`
    const [resposta] = await con.query(comando,[imagem, id]);
    return resposta.affectedRows;
} 

export async function listarTodosFilmes() {
    const command = `
    SELECT  id_filme        id,
            nm_filme        nome,
            vl_avaliacao    avaliacao,
            dt_lancamento   lancamento,
            bt_disponivel   disponivel
     FROM   tb_filme`;

    const [ rows ] = await con.query(command);
    return rows;
}

export async function buscarPorNome (nome) {
    const comando =  
    `SELECT id_filme    id,
    nm_filme            nome,
    vl_avaliacao        avaliacao,
    dt_lancamento       lancamento,
    bt_disponivel       disponivel
    FROM tb_filme
    WHERE nm_filme like?`;

    const [linhas] = await con.query (comando, [`%${nome}%`]);
    return linhas;
}

export async function buscarPorId(id) {
    const comando =  
    `SELECT id_filme    id,
    nm_filme            nome,
    vl_avaliacao        avaliacao,
    dt_lancamento       lancamento,
    bt_disponivel       disponivel
    FROM tb_filme
    WHERE id_filme = ?`;
    const [linhas] = await con.query (comando, [id]);
    return linhas[0];
}

export async function deletarFilme(id) {
    const command = `
    DELETE FROM tb_filme
          WHERE id_filme = ? `;
    const [ rsp ] = await con.query(command, [id]);
    console.log(rsp.affectedRows)
    return rsp.affectedRows;
}
