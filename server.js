import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app     = express();

// const { documentation } = 

const { 
    json, 
    urlencoded 
} = express;

// MICROSERVICE CONFIG

app.use( cors({
    origin: '*'
}));

app.use( json() );

app.use(urlencoded({ extended: false}));
app.use( express.static( 'public' ) );

const pagePath = path.resolve( __dirname, 'public/index.html' );


app.get('/', (req, res, next) => {
    res.sendFile(pagePath)
});

// MICROSERVICES ON PORT: 
app.listen( 7000, () => {
    console.log(`Server starting on port: 7000`);
});