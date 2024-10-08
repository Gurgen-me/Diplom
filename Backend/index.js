const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

const Service = require('./models/Services');
const Portfolio = require('./models/Portfolio');

const PORT = 3000;

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());



app.get('/services', async (req, res) => {
    try {
        const response = await Service.find();
        console.log(response);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
})

app.get('/portfolios', async (req, res) => {
    try {
        const response = await Portfolio.find();
        console.log(response);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
})

async function run() {
    try {
        await mongoose.connect('mongodb://localhost:27017/GM');
        server.listen(PORT);
        console.log(`Start on http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
}
run().catch(console.log);