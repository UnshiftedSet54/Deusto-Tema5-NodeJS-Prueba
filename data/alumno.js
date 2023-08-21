const alumnos = [
  {
    "id": 1,
    "nombre": "Jonathan",
    "apellido": "Jimenez",
    "calificacion": 4
  },
  {
    "id": 2,
    "nombre": "Martha",
    "apellido": "Diaz",
    "calificacion": 7
  },
  {
    "id": 3,
    "nombre": "Pamela",
    "apellido": "Rios",
    "calificacion": 7
  },
  {
    "id": 4,
    "nombre": "Alberto",
    "apellido": "Rios",
    "calificacion": 3
  },
  {
    "id": 5,
    "nombre": "Monica",
    "apellido": "Diaz",
    "calificacion": 1
  },
]

const getAlumnoById = apellido => alumnos.filter(alumno => alumno.apellido === apellido)

module.exports = {alumnos, getAlumnoById}