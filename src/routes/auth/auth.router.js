import express from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';
const users = [
    {
        _id : "U123",
        firstName : 'musa',
        lastName : 'büyükkaba',
        email : 'ms@isq.wer',
        password : '123456'
    }
]
const route = () => {
    const router = new express.Router();
    router.route('/login').post((req, res) => {
        // router.route('/login').get((req,res)=>{ // get metotunda test ettim
        const {email , password} = req.body;
        const user = users.find((user) => user.email === email);
        if(!user){
            res.send({
                status : false,
                message : 'bulamadım'
            })
        }else{
            if(user.password === password){
                const token = jwt.sign({userId : user._id},config.jwtSecret);
                res.send({
                    status : true,
                    token : token,
                    message : 'giriş başarılı'
                })
            }else{
                res.send({
                    status : false,
                    message : 'yanlis oldu'
                })
            }
        }
        res.send("ben tamamım");
    })
    return router;
}
export default {
    route,
    routePrefix: `/${config.version}/auth`
}