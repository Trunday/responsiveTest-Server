import bodyParser from 'body-parser';
import express from 'express';
import AuthRouter from './routes'
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
AuthRouter(app);
app.get('/',(rep,res) => {
    res.send('Galiba ben buradayım');
    // const sonuc = {
    //     durum : true,
    //     mesaj : "selamlar"
    // }
    // res.send(sonuc);
})
// app.post('/',(req,res) => {
//     res.send(req.body);
// })
app.listen(3300, ()=> console.log("çalıştı"))