let express = require('express');
let router = express.Router();
let path = require('path')
const CateController = require('../controller/CateController.js');
const ArtCont = require('../controller/ArtCont.js');
router.get(/^\/$|^\/admin$/,(req,res)=>{
    res.render('index.html')
})
//文章列表
router.get('/artindex',CateController.artindex)
// 数据
router.get('/data',(req,res)=>{
    // res.render('cate-data.html')
    res.sendFile(path.join(__dirname,'../views/cate-data.html'))
})
//渲染后台分类列表页面
router.get('/catindex',CateController.catindex)
//渲染出添加分类的页面
router.get('/catadd',CateController.catadd)

//渲染出编辑分类的页面
router.get('/catedit',CateController.catedit)
//提交分类数据
router.post('/catpost',CateController.catpost)
router.get('/artadd',(req,res)=>{
    res.render('article-add.html')
})
//获取所有分类数据的接口
router.get('/getCate',CateController.getCate)
//获取所有分类数据的接口
router.get('/getOneCate',CateController.getOneCate)
//删除分类的接口
router.post('/delCat',CateController.delCat)
// //编辑分类的接口
router.post('/update',CateController.update)

router.get('/allarticle',ArtCont.allArticle)

router.all('*',(req,res)=>{
    res.json({errcode:10004,message:"请求错误"})
})
module.exports = router;