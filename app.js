const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!' + '测试中文是否好用！');
  res.send('测试中文是否好用2！');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
