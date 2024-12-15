import Redis from "ioredis";
import serverConfig from "./server.config";

const redisConfig = {
    port:serverConfig.REDIS_PORT,
    host:serverConfig.REDIS_HOST
}

const redisConnection = new Redis(redisConfig);
console.log(redisConfig);


export default redisConnection;