const express = require('express')
const knex = require('./connet.knex')

const app = express()


app.get('/provines', async (req, res) => {
    // const park = await knex.select().table('yytt')
    // console.log(park)
    return res.status(200).json('hello')
})

app.listen(8880, () => console.log('Startding'))