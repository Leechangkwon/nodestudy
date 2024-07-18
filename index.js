const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
// const q = req.params
// console.log(q.id)

// const q = req.query
// console.log(q.q)
// console.log(q.name)

const {name} = req.params

if(name == "dog") {
    res.json({'sound' : '멍멍'})
} else if (name == "cat") {
    res.json({'sound' : '야옹'})
} else res.json({'sound' : ' 알수 없음'})


res.json({'userid' : q.name})
})

app.get('/cat', (req, res) => {
    res.json({'sound' : '야옹'})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})