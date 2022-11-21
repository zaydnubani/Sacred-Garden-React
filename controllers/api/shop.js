const express = require('express'),
{client, q} = require('../../configuration/fauna'),
app = express()


app.post('/api/createClaim', async (req, res) => {
    try {
        client.query(
            q.Create(
                q.Collection('CLAIMS'),
                {
                    data:{
                        Wallet: req.body.address,
                        Items: req.body.items,
                        Tokens: req.body.tokens,
                        First: req.body.first,
                        Last: req.body.last,
                        Email: req.body.email,
                        Address: req.body.address,
                        Apartment: req.body.apartment,
                        City: req.body.city,
                        State: req.body.state,
                        ZIP: req.body.zip
                    }
                }
            )
        ).then((data)=>{
            console.log(data)
            res.json(data)
        }).catch((err)=>{
            console.log(err)
        })
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})
