import { con } from "./connection.js";

export async function logar(email, passwd) {
    const command = `
    select  id_usuario      id,
            nm_usuario      nome,
            ds_email        email
    from tb_usuario 
    where ds_email             =?   
        and ds_senha           =?
    `
    const [linhas] = await con.query(command, [email, passwd]);

    return linhas[0];
}
