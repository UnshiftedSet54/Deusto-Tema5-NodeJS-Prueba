const {alumnos, getAlumnoById} = require('./data/alumno')
const validateString = require('./middleware/validacion')
const express = require('express')
const app = express()
const PORT = process.env.PORT | 3000

app.get('/alumnos', (req, res) => {
  res.status(200).json(alumnos)
})

app.get('/alumnos/:apellido', validateString, (req, res) => {
  const apellido = req.params.apellido
  res.status(200).json(getAlumnoById(apellido))
})

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`)
})