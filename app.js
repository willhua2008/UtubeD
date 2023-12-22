const express = require('express');
const { initDB } = require('./database'); // 引用数据库初始化函数

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
    res.send('Hello World!' + '测试中文是否好用！');
    //res.send('测试中文是否好用2！');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
