import express from 'express';
import config from 'config';
const route = () => {
    const router = new express.Router();
    router.route('/login').post((req,res)=>{
    // router.route('/login').get((req,res)=>{ // get metotunda test ettim
        res.send("ben tamamım");
    })
    return router;
}
export default {
    route,
    routePrefix : `/${config.version}/auth`
}