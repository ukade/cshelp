const fetch = require('node-fetch');


fetch('http://localhost:3000/test'
).then(
    res => res.json()
).then(
    json => console.log(JSON.stringify(json))
).catch(
    err => console.log(err)
);