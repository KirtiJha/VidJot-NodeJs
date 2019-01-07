if(process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://<kirti>:<kirti1986>@ds151124.mlab.com:51124/vidjot-prod'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }
}