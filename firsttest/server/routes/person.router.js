// import pool from '../modules/pool';
// import express from 'express'

const express = require('express')
const pool = require('../modules/pool')
const router = express.Router();

// let peoples = require('../modules/people')

router.get('/', (req, res) => {
    console.log("im in the get request")
    const sqlText = `
    SELECT * FROM "person"
        ORDER BY "id"; 
    `;

    pool.query(sqlText)
    .then((dbRes) => {
        const person = dbRes.rows;
        console.log(person)
        res.send(person)
    })
    .catch((dbErr) => {
        console.log('an error occured in the GET person/', dbErr);
        res.sendStatus(500)
    })
    // res.send(peoples)
})

// router.get('/:id', (req, res) => {
//     console.log("im in the get request", req.params)
//     res.send(req.body)
// })

module.exports = router;