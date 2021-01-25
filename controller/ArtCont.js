let ArticleCont = {}

let artData = require('../mockdata/article.json')

const model = require('../model/model.js')

ArticleCont.allArticle = async (req,res)=>{
    let {page,limit:pagesize} = req.query;
    let offset = (page - 1)*pagesize;
    let sql = `select * from article limit ${offset},${pagesize}`;
    let sql2 = `select count(*) as count from article`;
    let data = await model(sql)
    let datacount = await model(sql2)
    let response = {code:0,count:datacount[0].count,data:data,msg:""}
    // res.json(artData)
    res.json(response)
}

module.exports = ArticleCont