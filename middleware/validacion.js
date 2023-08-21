const validateString = (req, res, next) => {
  if( /\d/.test(req.params.apellido) ) return res.status(400).send('Apellido Invalido.')
  next()
}

module.exports = validateString