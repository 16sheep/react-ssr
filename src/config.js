const mongoUrl = () =>
  getEnv('cpro_mongo_url', {
    test: 'mongodb://localhost:27017',
    development: 'mongodb://localhost:27017',
  })

const mongoDatabase = () =>
  getEnv('cpro_mongo_database', {
    test: 'cpro-test',
    development: 'cpro-development',
  })

  module.exports = {
    mongoDatabase,
    mongoUrl,
  }
  