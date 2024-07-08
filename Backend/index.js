const express = require('express');
const { connectToDb, getDb } = require('./db');

const PORT = 3000;

const app = express();

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Listening port ${PORT}`);
        });
        db = getDb();
    } else {
        console.log(`Db connection error: ${err}`);
    }
});

app.get('/services', (req, res) => {
    const services = [];
    db
        .collection('services')
        .find()
        .forEach((service) => services.push(service))
        .then(() => {
            res
                .status(200)
                .json(services);
        })
})