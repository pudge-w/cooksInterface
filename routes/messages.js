var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.json({
    status: 0,
    urlPrefix: 'http://10.31.160.92:5000/images/messages',
    result: [
      {
        id: 111,
        author: '水晶之恋',
        time: 1594347672000,
        avatarUrl: '/u=4140499325,1931790298&fm=26&gp=0.jpg',
        imgUrl: '/u=638644601,753284222&fm=26&gp=0.jpg',
        title: '西瓜冰棒',
        describe: '现在市售的西瓜味冰棒，添加的都是香精和添加剂，虽然好吃，但是缺少健康。自己制作的可以控制糖量，吃起来更健康'
      },
      {
        id: 222,
        author: '超级幸运辣',
        time: 1592799672000,
        avatarUrl: '/u=2749209087,3487414841&fm=26&gp=0.jpg',
        imgUrl: '/u=3118457789,1737756835&fm=26&gp=0.jpg',
        title: '无糖南瓜烙',
        describe: '不加1滴油，免烤面炸外焦里弱超好吃，平底锅就能做，大人小孩都爱吃，一个不过瘾。'
      },
      {
        id: 111,
        author: '水晶之恋',
        time: 1594347672000,
        avatarUrl: '/u=4140499325,1931790298&fm=26&gp=0.jpg',
        imgUrl: '/u=638644601,753284222&fm=26&gp=0.jpg',
        title: '西瓜冰棒',
        describe: '现在市售的西瓜味冰棒，添加的都是香精和添加剂，虽然好吃，但是缺少健康。自己制作的可以控制糖量，吃起来更健康'
      },
      {
        id: 222,
        author: '超级幸运辣',
        time: 1592799672000,
        avatarUrl: '/u=2749209087,3487414841&fm=26&gp=0.jpg',
        imgUrl: '/u=3118457789,1737756835&fm=26&gp=0.jpg',
        title: '无糖南瓜烙',
        describe: '不加1滴油，免烤面炸外焦里弱超好吃，平底锅就能做，大人小孩都爱吃，一个不过瘾。'
      }
    ]
  })
});
module.exports = router;
