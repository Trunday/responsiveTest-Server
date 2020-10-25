<<<<<<< HEAD
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
=======
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
>>>>>>> 7366cc7b1a3382977e4dbd47bc74b25491e2e427
app.listen(3300, ()=> console.log("çalıştı"))