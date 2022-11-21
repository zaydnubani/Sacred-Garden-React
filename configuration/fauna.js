const faunadb = require('faunadb')

require('dotenv').config()

const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET })
const q = faunadb.query

module.exports =  { client, q}
