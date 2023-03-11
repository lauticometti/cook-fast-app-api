//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require('dotenv').config()
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const getDiets = require('./src/controllers/diets');
const PORT = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ alter: true  }).then(() => {
  server.listen(PORT, () => {
    console.log('listening at port: ', PORT); // eslint-disable-line no-console
  });
}).then(() => {
  getDiets()
}).catch((err) => {
  console.log(err);
})
