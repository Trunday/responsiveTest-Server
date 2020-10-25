import bodyParser from 'body-parser';
import express from 'express';
const app = express();
app.use(bodyParser.urlencoded({extended=false}));
app.use(bodyParser.json());
app.get('/',(rep,res) => {
    const sonuc = {
        durum : true,
        mesaj : "selamlar"
    }
    res.send(sonuc);
})
app.post('/',(req,res) => {
    res.send(req.body);
})
app.listen(3300, ()=> console.log("çalıştı"))