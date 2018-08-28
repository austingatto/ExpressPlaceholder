const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('This is Austin Gatto\'s bad website.</br>Leave this place, for your sanity dwindles every second you remain.'))

app.listen(80, () => console.log('Listening on port 80'))