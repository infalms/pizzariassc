module.exports = function(app) {
  app.get('/ember-hamsters/:foo', function(req, res) {
    res.send('hello ' + req.params.foo);
  });
};