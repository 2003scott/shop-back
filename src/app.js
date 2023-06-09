import express from 'express';
import morgan from 'morgan';


const app = express();


app.use(morgan('dev'));
app.set("port", process.env.PORT || 3000)


app.get("/", async (req,res) => {
    res.json({
        message: "Hello World"
    })
})


export default app;