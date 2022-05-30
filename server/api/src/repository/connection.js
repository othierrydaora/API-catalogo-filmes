import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: '1234',
    database: 'infob_catalogofilmesdb'
});

export { con };
