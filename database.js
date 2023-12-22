const oracledb = require('oracledb');

async function initDB() {
    try {
        await oracledb.createPool({
            user: 'WEB_USER',
            password: process.env.WEB_USER_DB_PASS, // 使用环境变量
            connectString: '(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.ap-seoul-1.oraclecloud.com))(connect_data=(service_name=g5a584c1e83499a_huatest_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))'
        });
        console.log('Connection Pool is Successful');
    } catch (err) {
        console.error('Connection Pool Failed: ', err);
    }
}

module.exports.initDB = initDB;
