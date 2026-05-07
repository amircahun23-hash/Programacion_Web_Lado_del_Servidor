//Por Jairo amir cahun tamay 
import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.set ("views", "./views");
app.set("view engine","ejs");

app.use(express.static("public"));

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://random-d.uk/api/random');
        const message = result.data.message; 
        const url = result.data.url;
        res.render('index', {
            
            message: message,
            url: url,
        });
        console.log(result.data);

        
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log('Error:', error.message);
        }
        
    }
});

app.listen(port,() =>{
    console.log ("server esta en el puerto",port);
});
