import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import config from "./config/index.js";
import router from "./routes/index.js";

const app = express()
const port = config.PORT



app.get('/', (req, res) => {
  res.send('Home Route')
})

app.use(router)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })

export default app;