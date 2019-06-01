import HttpStatus from 'http-status-codes'

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
})

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
  statusCode
})

const data = [
  { id: 1, name: 'example name', age: 11 },
  { id: 2, name: 'example name', age: 22 },
  { id: 3, name: 'example name', age: 33 },
]

exports.getAll = () => {
  return data
    // .then(result => defaultResponse(result))
    // .catch(error => errorResponse(error.message))
}

exports.getById = id => {
  let res = data.find(el => {
    return el.id == id
  })

  return res
}

exports.create = newData => {
  newData.id = Math.floor(Math.random() * 100)
  data.push(newData)
  return data
}

exports.update = (id, params) => {
  let res = data.find(el => {
    return el.id == id
  })

  res.name = params.name
  res.age = params.age

  return res
}

exports.del = id => {
  let res = data.find(el => {
    return el.id != id
  })

  return res
}
