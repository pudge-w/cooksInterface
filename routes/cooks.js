var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/banner', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    status: 0,
    prefix: 'http://10.31.160.92:5000/images/banner',
    result: [
      {
        id: 1,
        url: '/u=124021561,691506516&fm=26&gp=0.jpg'
      },
      {
        id: 2,
        url: '/u=2085256171,2158499899&fm=26&gp=0.jpg'
      },
      {
        id: 3,
        url: '/u=2441669150,3306521718&fm=26&gp=0.jpg'
      },
      {
        id: 4,
        url: '/u=3187249299,3585682009&fm=26&gp=0.jpg'
      }
    ]
  })
});

router.get('/menu', (req, res, next) => {
  res.json({
    status: 0,
    prefix: 'http://10.31.160.92:5000/images/menu',
    result: [
      {
        id: 1,
        url: '/u=2248463770,2852640546&fm=26&gp=0.jpg',
        title: '新手食谱',
        content: '一日三餐有营养'
      },
      {
        id: 2,
        url: '/u=1301808993,663812729&fm=26&gp=0.jpg',
        title: '美味素食',
        content: '健康清淡味道好'
      },
      {
        id: 3,
        url: '/u=3908606724,1960219796&fm=26&gp=0.jpg',
        title: '老火靓汤',
        content: '营养健康又滋补'
      },
      {
        id: 4,
        url: '/u=1301676375,2373038459&fm=26&gp=0.jpg',
        title: '品质食谱',
        content: '品质营养必不可少'
      }
    ]
  })
})


router.post('/recommend', (req, res, next) => {
  res.json({
    status: 0,
    title: '推荐',
    prefix: 'http://10.31.160.92:5000/images/recommend',
    result: [
      {
        id: 10001,
        url: '/u=3697883208,2054706924&fm=26&gp=0.jpg',
        title: '牛奶面包'
      },
      {
        id: 10002,
        url: '/u=2920775702,1291301709&fm=26&gp=0.jpg',
        title: '生煎肉包'
      },
      {
        id: 10003,
        url: '/u=1080072751,2087800807&fm=26&gp=0.jpg',
        title: '牛肉拉面'
      },
      {
        id: 10004,
        url: '/u=2819380393,111527764&fm=26&gp=0.jpg',
        title: '水果拼盘'
      },
      {
        id: 10005,
        url: '/u=1979080012,3601994268&fm=26&gp=0',
        title: '海鲜拼盘'
      },
      {
        id: 10006,
        url: '/u=210206386,751311704&fm=26&gp=0.jpg',
        title: '黄金蛋卷'
      },
      {
        id: 10007,
        url: '/u=3101718789,3581106596&fm=26&gp=0.jpg',
        title: '可乐鸡翅'
      },
      {
        id: 10008,
        url: '/u=3137069297,700435856&fm=26&gp=0.jpg',
        title: '小排儿'
      },
      {
        id: 20001,
        url: '/u=3599005899,3938380692&fm=26&gp=0.jpg',
        title: '大螃蟹儿'
      },
      {
        id: 20002,
        url: '/u=3733081534,1572444276&fm=26&gp=0.jpg',
        title: '樱桃儿'
      },
      {
        id: 20003,
        url: '/u=1491364889,2157081990&fm=26&gp=0.jpg',
        title: '深山老笋'
      },
      {
        id: 20004,
        url: '/u=3363049508,176486576&fm=26&gp=0.jpg',
        title: '银耳羹儿'
      },
      {
        id: 20005,
        url: '/u=241751740,3668764665&fm=26&gp=0',
        title: '小章鱼儿'
      },
      {
        id: 30001,
        url: '/u=2632745365,1633193560&fm=26&gp=0.jpg',
        title: '土豆丝'
      },
      {
        id: 30002,
        url: '/u=4276025378,744691170&fm=15&gp=0.jpg',
        title: '小寿司'
      },
      {
        id: 30003,
        url: '/u=3636173294,2651899300&fm=26&gp=0.jpg',
        title: '很多蔬菜'
      },
      {
        id: 30004,
        url: '/u=2399425498,321997378&fm=26&gp=0.jpg',
        title: '麻婆豆腐'
      },
      {
        id: 30005,
        url: '/u=3329466577,1484671448&fm=26&gp=0',
        title: '北京烤鸡儿'
      },
      {
        id: 30006,
        url: '/u=2477523502,1201383120&fm=26&gp=0',
        title: '陆凤爪'
      }
    ]
  })
})

module.exports = router;
