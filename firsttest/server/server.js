const express = require('express')

const app = express()

const PORT = process.env.PORT || 5001

const personRouter = require('./routes/person.router')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('build'))

app.use('/api/person', personRouter)


app.listen(PORT, () => {
    console.log(`we are in the port: ${PORT}`)
    
})