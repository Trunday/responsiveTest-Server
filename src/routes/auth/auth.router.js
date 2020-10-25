import express from 'express';
import config from 'config';
const route = () => {
    const router = new express.Router();
    router.route('/login').post((req,res)=>{
        res.send("ben tamamım");
    })
    return router;
}
export default {
    route,
    routePrefix : `/${config.version}/auth`
}