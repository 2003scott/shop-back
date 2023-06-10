import express from 'express';
import morgan from 'morgan';
import garmentRoute  from './modules/garments/v1/garment.routes.js'



const app = express();


app.set("port", process.env.PORT || 3000)
app.use(express.json());
app.use(morgan('dev'));


app.use("/api/v1/garments", garmentRoute)



app.get("/", async (req,res) => {
    res.json({
        message: "Hello World"
    })
})


export default app;