import express from 'express';
import serverConfig from "./config/server.config"

const {PORT} = serverConfig;

const app = express();

app.listen(PORT,() => {
    console.log(`server successfully running on ${PORT}`);
    
})

