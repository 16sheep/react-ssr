'use strict'

const { MongoClient } = require('mongodb')
const { mongoDatabase, mongoUrl } = require('../config')

module.exports = () => {
  const client = new MongoClient(mongoUrl(), { useNewUrlParser: true })
  return {
    connect: client.connect.bind(client),
    close: client.close.bind(client),
    db: () => client.db(mongoDatabase()),
  }
}