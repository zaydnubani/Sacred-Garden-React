const axios = require('axios');
const express = require('express'),
// const request = require('request');
dotenv = require('dotenv'),
path = require('path/posix'),
{client, q} = require('./configuration/fauna.js');

dotenv.config();

global.cart_data = '';
global.item_data = '';
global.checkout_data = '';
global.order_data = '';

const PORT = process.env.PORT || 5000;

const sequelize = require('./configuration/connection');

var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './client/build')));

// this retrieves all the shop items
app.get('/api/shop/collection', (req, res) => {
    client.query(q.Paginate(q.Documents(q.Collection('SHOP'))))
    .then(async (ret) => {
        let arr = []
        await ret.data.forEach(async ref=>{
            const data = JSON.stringify(ref),
            id = JSON.parse(data)["@ref"].id;
            client.query(q.Get(q.Ref(q.Collection('SHOP'), id)))
            .then((arg) => { 
                arr.push(arg.data)
                if(arr.length === ret.data.length){
                    res.send(arr)
                }
            })
        })       
    }).catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        res.json(err)
    ))
});

// this retrieves all the source profiles for the shop
app.get('/api/shop/source', (req, res) => {
    client.query(q.Paginate(q.Documents(q.Collection('SOURCE'))))
    .then(async (ret) => {
        let arr = []
        await ret.data.forEach(async ref=>{
            const data = JSON.stringify(ref),
            id = JSON.parse(data)["@ref"].id;
            client.query(q.Get(q.Ref(q.Collection('SOURCE'), id)))
            .then((arg) => { 
                arr.push(arg.data)
                if(arr.length === ret.data.length){
                    res.send(arr)
                }
            })
        })       
    }).catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        res.json(err)
    ))
});

// retrieves the printful listings information
app.get('/api/shop/printful/collection', async (req, res) => {
    try {
        axios({
            method: 'GET',
            url: 'https://api.printful.com/store/products',
            responseType: 'json',
            headers: {
                Authorization: `Bearer ${process.env.PRINTFUL_API}`
            }
        })
        .then(async products => {
            const arr = []
            await products.data.result.forEach((item)=>{
                let length = products.data.result.length
                axios({
                    method: 'GET',
                    url: `https://api.printful.com/store/products/${item.id}`,
                    responseType: 'json',
                    headers: {
                        Authorization: `Bearer ${process.env.PRINTFUL_API}`
                    }
                })
                .then((item) => {
                    // console.log(ret.data.result)
                    axios({
                        method: 'GET',
                        url: `https://api.printful.com/products/variant/${item.data.result.sync_variants[0].variant_id}`,
                        responseType: 'json',
                        headers: {
                            Authorization: `Bearer ${process.env.PRINTFUL_API}`
                        }
                    })
                    .then((variant)=>{
                        item.data.result.sync_product.description = variant.data.result.product.description;
                        item.data.result.sync_product.dimensions = variant.data.result.product.dimensions;
                        arr.push(item.data.result)
                        // arr.push(variant.data.result)
                        if(arr.length === length){
                            res.json(arr);
                        }                    
                    })
                })
                .catch((err)=>{
                    res.json(err)
                })
            })
        })
    } catch (err) {
        res.json(err)
    }
})

app.post('/api/shop/printful/order/send', async (req, res) => {
    try {
        axios({
            method: 'POST',
            url: `https://api.printful.com/orders`,
            // responseType: 'json',
            headers: {
                Authorization: `Bearer ${process.env.PRINTFUL_API}`,
            },
            data: req.body
        })
        .then((ret) => {
            console.log(ret)
            res.json(ret.data.result)
        })
        .catch((err)=>{
            console.log(err)
            res.json(err)
        })
    } catch (err) {
        res.json(err)
    }
})

// This is sends the shop cart via a POST, currently used for CHECKOUT page.
app.post('/api/shop/cart/send', async (req, res) => {
    try {
        cart_data = req.body;
        res.json(req.body)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
});

// This sends a shop item via a POST, currently used for the ITEM specific detail page.
app.post('/api/shop/item/send', async (req, res) => {
    try {
        item_data = req.body;
        res.json(req.body)
    } catch (err) {
        console.log(err);
        res.json(err)
    }
});

app.post('/api/shop/checkout/send', async (req, res) => {
    try {
        checkout_data = req.body;
        res.json(req.body)
    } catch (err) {
        console.log(err);
        res.json(err)
    }
});

app.post('/api/shop/checkout/success/create', (req, res) => {
    client.query(
        q.Create(
          q.Collection('ORDERS'),
            { 
                data: req.body 
            },
        )
    )
    .then((ret) => 
        res.json(ret)
    )
    .catch((err) => 
        res.json(err)
    )
})

app.post('/api/shop/checkout/success/send', async (req, res) => {
    try {
        order_data = req.body;
        res.json(req.body)
    } catch (err) {
        console.log(err);
        res.json(err)
    }
});

// this recieves the item data on the ITEM page.
app.get('/api/shop/item/recieve', (req, res) => {
    res.json(item_data);
});

// This recieves the cart information on CHECKOUT page.
app.get('/api/shop/cart/recieve', (req, res) => {
    res.json(cart_data)
});

app.get('/api/shop/checkout/recieve', (req, res) => {
    res.json(checkout_data)
});

app.get('/api/shop/checkout/success/recieve', (req, res) => {
    res.json(order_data)
});

app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

// This creates ruum_db if it doesn't exist and connects with it
sequelize.sync({ force: false }).then(() => 
    {
    // tells express to start listening on the server port
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
    }
);

