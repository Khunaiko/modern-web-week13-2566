const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express();
require('dotenv').config()

//Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json())

//http://localhost:3000
app.get("/", (req,res) => {
    console.log(req.query)
    console.log(req.params)
    console.log(req.url)
    return res.status(200).json ({
        messag:'Mark',
        Leve:"Admin",
        params: req.params,
    });
});

//http://localhost:3000/1
app.get("/:id", (req,res) => {
    console.log(req.query)
    console.log(req.params)
    console.log(req.url)
    return res.status(200).json ({
        messag:'Mark',
        Leve:"Admin",
        params: req.params,
    });
});

//POST: http://localhost:3000/1
app.post("/:id", (req,res) => {
    const data = req.body;
    return res.status(201).json ({
        messag:"POST: Successfilly!",
        data: data,
    });
});


//PUT: http://localhost:3000/1
app.put("/:id", (req,res) => {
    const data = req.body;
    return res.status(200).json ({
        messag:"PUT: Successfilly!",
        data: data,
    });
});

//DELETE: http://localhost:3000/1
app.delete("/:id", (req,res) => {
    const data = req.body;
    return res.status(200).json ({
        messag:"delete: Successfilly!",
        data: data,
    });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})