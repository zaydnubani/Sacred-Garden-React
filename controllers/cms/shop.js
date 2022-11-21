const express = require('express'),
{client, q} = require('../../configuration/fauna'),
app = express()

app.get('/cms/shop', (req, res) => {
    try {
        let arr = [];
        client.query(q.Paginate(q.Match(q.Index('allMERCHANDISE'))))
        .then((ret) => {
            ret.data.forEach(async (ref) => {
                await client.query(q.Get(q.Ref(q.Collection('SHOP'), ref.value.id))).then((oth) => { 
                    arr.push(oth.data) 
                })
            })
            res.json(arr)
        }).catch((err) => console.error(
            'Error: [%s] %s: %s',
            err.name,
            err.message,
            err.errors()[0].description,
            res.json(err)
        ))
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

