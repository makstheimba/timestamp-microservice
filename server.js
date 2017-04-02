const express = require('express');
const timestamp = require.main.require('./api/timestamp')
const app = express();

app.get('/:date', (req, res) => {
    console.log(req.params.date);
    res.send(timestamp.getTimestamp(req.params.date))
});

app.listen(process.env.PORT || 3001);
