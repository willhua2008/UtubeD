// 引入环境变量
require('dotenv').config();


const express = require('express');
const { initDB, getConnection } = require('./database'); // 确保同时引入 initDB 和 getConnection

const app = express();
// 初始化数据库
initDB();

// 测试数据库连接的路由
app.get('/test-db', async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute('SELECT * FROM users');
        await connection.close();

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Can not connnect to ADW!');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!' + '测试中文是否好用！' + 'password: ' + process.env.WEB_USER_DB_PASS + ' @ Wallet Path: ' + process.env.TNS_ADMIN);
    //res.send('测试中文是否好用2！');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
