import express from "express";
import bodyParser from 'body-parser'
import cors from "cors"
import routes from "./routes/index.js"
const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use(routes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong"
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

export default app