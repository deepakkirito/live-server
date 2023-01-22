const vaCrousel = require('../Models/api-model')
const vaLogin = require('../Models/api-login')
const vaLoginInfo = require('../Models/api-loginInfo')


const getCrousel = ((req , res) => {
    vaCrousel.find({}).limit(0).skip(0).exec((err, profile) => {
        if (err) {
            return res.status(500).send({ error: "Internal Server Error" });
        }
        res.status(200).send(profile);
    })
})

const getLogin = (req, res) => {
    console.log(req.query);
    vaLogin.find({userName:req.query.userName, passWord:req.query.passWord}).exec((err,response) => {
        if (err) {
            return res.status(500).send({ error: "Internal Server Error" });
        }
        res.status(200).send(response[0]);
    })
}

const getLoginInfo =(req, res) => {
    vaLoginInfo.find({user:req.query.user}).exec((err,response) => {
        console.log(response);
        res.status(200).send(response);
    })
}

const getPdf = (req, res) =>{
    res.download('C:/Users/HP/Desktop/edyoda/Va/vaBackend/Public/pdf.pdf');
}


module.exports = {
    getCrousel,
    getLogin,
    getLoginInfo,
    getPdf
}