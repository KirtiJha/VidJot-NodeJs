if(process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:'mongodb://heroku_dpc9cr8d:r3hrods56p92gkhe23h0mf7ihg@ds151124.mlab.com:51124/heroku_dpc9cr8d'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }
}