import express from 'express';
import serverConfig from "./config/server.config"
import SampleWorker from './worker/SampleWorker';
import sampleQueueProducer from './producers/sampleQueueProducer';

const {PORT} = serverConfig;

const app = express();

app.listen(PORT,() => {
    console.log(`server successfully running on ${PORT}`);
    
    SampleWorker("SampleQueue");

    sampleQueueProducer('SampleJob',{
        name:"Harsh",
        designation:"Junior Engineer",
        location : "remote"
    })
})

