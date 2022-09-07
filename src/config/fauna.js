import faunadb from 'faunadb'

require('dotenv').config()

const client = new faunadb.Client({ secret: 'fnAEtzqw91ACUeFUhVf-INl_gaXOXRcmK6RA7Vj7' })
const q = faunadb.query

export { client, q }
